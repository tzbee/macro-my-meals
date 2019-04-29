const API_KEY = 'nXoATdaSmHy4vbHi9Hbmt9yVTwZWy91OZzKiUcoa';
const listURL = `https://api.nal.usda.gov/ndb/list?&api_key=${API_KEY}`;

const getReportURL = nbdID =>
	`https://api.nal.usda.gov/ndb/reports?ndbno=${nbdID}&api_key=${API_KEY}`;

export const getFoodDataList = () => {
	return fetch(listURL)
		.then(res => res.json())
		.then(data => {
			return data.list.item;
		});
};

export const getFoodReport = id => {
	return fetch(getReportURL(id))
		.then(res => res.json())
		.then(foodData => {
			return {
				nutrients: foodData.report.food.nutrients
			};
		});
};
