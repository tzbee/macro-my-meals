import { getFoodReport, searchFoodItems } from './api-wrapper.js';
export default class FoodDataCache {
	constructor() {
		this.cache = {};
		this.hitMap = {};
		this.storage = window.localStorage;
		this._loadHits();
	}

	//Async
	search(term) {
		return searchFoodItems(term);
	}

	// Async
	getFoodData(id) {
		if (!this.cache[id]) {
			console.log(`Food data for item ${id} not found in cache`);
			this.cache[id] = getFoodReport(id);
		} else {
			console.log(`Food data for item ${id} found in cache`);
		}

		this._addHitCount(id);
		return this.cache[id];
	}

	_loadHits() {
		this.hitMap = JSON.parse(this.storage.getItem('hits') || '{}');
		return this.hitMap;
	}

	_saveHitMap() {
		this.storage.setItem('hits', JSON.stringify(this.hitMap));
	}

	_addHitCount(id) {
		this.hitMap[id] = (this.hitMap[id] || 0) + 1;
		this._saveHitMap();
	}

	getHitCount(id) {
		return this.hitMap[id] || 0;
	}
}
