const axios = require('axios');

const API_KEY = 'nXoATdaSmHy4vbHi9Hbmt9yVTwZWy91OZzKiUcoa';
const listURL = `https://api.nal.usda.gov/ndb/list?&api_key=${API_KEY}`;

const getReportURL = nbdID =>
	`https://api.nal.usda.gov/ndb/reports?ndbno=${nbdID}&api_key=${API_KEY}`;

const getSearchURL = q =>
	`https://api.nal.usda.gov/ndb/search?q=${encodeURIComponent(
		q
	)}&api_key=${API_KEY}&ds=${encodeURIComponent('Standard Reference')}`;

const fetchJSON = url => {
	return axios.get(url).then(({ data }) => data);
};

module.exports.getFoodDataList = () => {
	return fetchJSON(listURL).then(data => {
		return data.list.item;
	});
};

module.exports.getFoodReport = id => {
	if (!id) throw new Error('Cannot get food report: No id provided');
	return fetchJSON(getReportURL(id)).then(foodData => {
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
				res[measure.label] = {
					value: measure.value / measure.qty,
					eq: { value: measure.eqv, unit: measure.eunit }
				};
				return res;
			}, {});

			const valueMap = {
				g: { value: value / 100, eq: {} },
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

module.exports.searchFoodItems = term => {
	return fetchJSON(getSearchURL(term)).then(foodData => {
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
