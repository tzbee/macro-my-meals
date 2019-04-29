import uuid from 'uuid/v1';
import FoodDataCache from './FoodDataCache';

const DEFAULT_COUNT = 1;

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

	load() {
		return this.foodDataCache.load().then(() => this._load());
	}

	_createFoodItem(foodType) {
		return {
			id: uuid(),
			type: foodType,
			count: DEFAULT_COUNT
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

	plusCount(foodItemID) {
		return this._edit(foodItemID, 'count', count => count + 1);
	}

	minusCount(foodItemID) {
		return this._edit(foodItemID, 'count', count =>
			count > 0 ? count - 1 : count
		);
	}

	search(term) {
		return this.foodDataCache.search(term);
	}

	get() {
		return Object.values(this.cache);
	}

	getFoodData() {
		return this.foodDataCache.get();
	}
}
