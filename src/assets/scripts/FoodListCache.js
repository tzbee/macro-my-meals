import uuid from 'uuid/v1';
import FoodDataCache from './FoodDataCache';

const DEFAULT_QUANTITY = {
	value: 100,
	unit: 'g'
};

export default class FoodListCache {
	constructor() {
		this.foodDataCache = new FoodDataCache();
		this.localStorage = window.localStorage;
		this.cache = {};
	}

	_save() {
		const { cache, localStorage } = this;
		localStorage.setItem('foodList', JSON.stringify(cache));
		return this.get();
	}

	// Async returns Promise
	_load() {
		const { localStorage } = this;
		const jsonItem = localStorage.getItem('foodList') || '{}';
		this.cache = JSON.parse(jsonItem);

		return this.get();
	}

	// Async
	load() {
		return Promise.resolve(this._load());
	}

	_createFoodItem(foodType) {
		return {
			id: uuid(),
			type: foodType,
			quantity: DEFAULT_QUANTITY
		};
	}

	// returns the list if successfull
	// async returns promise
	add(foodItemTypeID) {
		return this.foodDataCache.getFoodData(foodItemTypeID).then(foodData => {
			const foodItem = this._createFoodItem(foodData);

			this.cache[foodItem.id] = foodItem;
			this._save();
			return this.get();
		});
	}

	remove(foodItemID) {
		delete this.cache[foodItemID];
		this._save();
		return this.get();
	}

	_edit(foodItemID, propKey, editFn) {
		const foodItem = this.cache[foodItemID];

		if (propKey in foodItem) {
			const propValue = foodItem[propKey];
			// Set the new value from the function
			foodItem[propKey] = editFn(propValue);
		}

		this._save();

		return this.get();
	}

	// do additional processing on the results like extra relevance sorting
	_processSearchResults(results, searchTerm) {
		return (
			results &&
			results.sort((res1, res2) => {
				return (
					this._getRelevanceValue(res2, searchTerm) -
					this._getRelevanceValue(res1, searchTerm)
				);
			})
		);
	}

	// The highest the relevance values, the more priority the result get
	_getRelevanceValue({ id: rID, name: rName }, searchTerm) {
		searchTerm = searchTerm.trim().toLowerCase();

		rName = rName.trim().toLowerCase();

		const rHitCount = this.foodDataCache.getHitCount(rID);
		const rTermIndex = rName.indexOf(searchTerm);
		const rTermIndexRelevance = rTermIndex === -1 ? 50 : rTermIndex;
		const rRelevanceValue = rHitCount * 50 - rTermIndexRelevance;

		return rRelevanceValue;
	}

	search(term) {
		return this.foodDataCache
			.search(term)
			.then(results => this._processSearchResults(results, term));
	}

	updateQuantity(quantity, foodItemID) {
		const foodItem = this.cache[foodItemID];

		if (foodItem) {
			foodItem.quantity = quantity;
		}

		this._save();

		return this.get();
	}

	get() {
		return Object.values(this.cache);
	}

	// async
	getFoodData(id) {
		return this.foodDataCache.getFoodData(id);
	}
}
