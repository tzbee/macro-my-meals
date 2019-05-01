const API_KEY = 'nXoATdaSmHy4vbHi9Hbmt9yVTwZWy91OZzKiUcoa';
const listURL = `https://api.nal.usda.gov/ndb/list?&api_key=${API_KEY}`;

const getReportURL = nbdID =>
	`https://api.nal.usda.gov/ndb/reports?ndbno=${nbdID}&api_key=${API_KEY}`;

const getSearchURL = q =>
	`https://api.nal.usda.gov/ndb/search?q=${encodeURIComponent(
		q
	)}&api_key=${API_KEY}&ds=${encodeURIComponent('Standard Reference')}`;

export const getFoodDataList = () => {
	return fetch(listURL)
		.then(res => res.json())
		.then(data => {
			return data.list.item;
		});
};

export const getFoodReport = id => {
	if (!id) throw new Error('Cannot get food report: No id provided');
	return fetch(getReportURL(id))
		.then(res => res.json())
		.then(foodData => {
			return {
				id,
				name: foodData.report.food.name,
				nutrients: translateNutrients(foodData.report.food.nutrients)
			};
		});
};

const translateNutrients = apiNutrients => {
	return apiNutrients
		.filter(nutrient => nutrient.group === 'Proximates')
		.map(({ measures, name, nutrient_id, unit, value }) => {
			const otherMeasures = measures.reduce((res, measure) => {
				res[measure.label] = measure.value / measure.qty;
				return res;
			}, {});

			const valueMap = {
				g: value / 100,
				...otherMeasures
			};

			return {
				id: nutrient_id,
				name,
				unit,
				valueMap
			};
		});
};

export const searchFoodItems = term => {
	return fetch(getSearchURL(term))
		.then(res => res.json())
		.then(foodData => {
			if (foodData.errors) {
				return null;
			} else {
				return foodData.list.item.map(({ ndbno, name }) => ({
					id: ndbno,
					name
				}));
			}
		});
};
