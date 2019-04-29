import {
	getFoodDataList,
	getFoodReport,
	searchFoodItems
} from './api-wrapper.js';
export default class FoodDataCache {
	constructor() {
		this.cache = {};
	}

	// Async returns Promise
	load() {
		return getFoodDataList().then(data => {
			this.cache = data.reduce((map, item) => {
				map[item.id] = item;
				return map;
			}, {});
			return this.get();
		});
	}

	//Async
	search(term) {
		return searchFoodItems(term);
	}

	get() {
		return Object.values(this.cache);
	}

	// Async
	getFoodData(id) {
		return getFoodReport(id).then(foodData => {
			this.cache[id] = this.cache[id] || {};

			this.cache[id] = Object.assign({}, this.cache[id], foodData);
			return this.cache[id];
		});
	}
}
