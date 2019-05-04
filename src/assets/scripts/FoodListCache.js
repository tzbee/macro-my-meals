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
		searchTerm = searchTerm.trim().toLowerCase();
		return (
			results &&
			results.sort(
				({ id: r1ID, name: r1Name }, { id: r2ID, name: r2Name }) => {
					r1Name = r1Name.trim().toLowerCase();
					r2Name = r2Name.trim().toLowerCase();

					const r1HitCount = this.foodDataCache.getHitCount(r1ID);
					const r2HitCount = this.foodDataCache.getHitCount(r2ID);

					const r1TermIndex = r1Name.indexOf(searchTerm);
					const r2TermIndex = r2Name.indexOf(searchTerm);

					const r1TermIndexRelevance =
						r1TermIndex === -1 ? 50 : r1TermIndex;
					const r2TermIndexRelevance =
						r2TermIndex === -1 ? 50 : r2TermIndex;

					// The highest the relevance values, the more priority the result get
					const r1RelevanceValue =
						r1HitCount * 50 - r1TermIndexRelevance;
					const r2RelevanceValue =
						r2HitCount * 50 - r2TermIndexRelevance;

					return r2RelevanceValue - r1RelevanceValue;
				}
			)
		);
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
	getFoodData() {
		return this.foodDataCache.get();
	}
}
