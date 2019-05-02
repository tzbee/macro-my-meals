import { getFoodReport, searchFoodItems } from './api-wrapper.js';
export default class FoodDataCache {
	constructor() {
		this.cache = {};
		this.hitMap = {};
		this.storage = window.localStorage;
		this._loadHits();
		this._loadFoodData();
	}

	//Async
	search(term) {
		return searchFoodItems(term);
	}

	// Async
	getFoodData(id) {
		if (!this.cache[id]) {
			console.log(`Food data for item ${id} not found in cache`);
			return getFoodReport(id).then(data => {
				this.cache[id] = data;
				this._addHitCount(id);
				this._saveFoodData();
				return this.cache[id];
			});
		} else {
			console.log(`Food data for item ${id} found in cache`);
		}

		this._addHitCount(id);
		return Promise.resolve(this.cache[id]);
	}

	_saveFoodData() {
		this.storage.setItem('foodData', JSON.stringify(this.cache));
		return this.cache;
	}

	_loadFoodData() {
		this.cache = JSON.parse(this.storage.getItem('foodData') || '{}');
		return this.cache;
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
