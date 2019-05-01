import {
	getFoodDataList,
	getFoodReport,
	searchFoodItems
} from './api-wrapper.js';
export default class FoodDataCache {
	constructor() {
		this.cache = {};
	}

	//Async
	search(term) {
		return searchFoodItems(term);
	}

	// Async
	getFoodData(id) {
		return getFoodReport(id);
	}
}
