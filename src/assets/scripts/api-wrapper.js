import $ from 'jquery';

const xhrFetch = url => {
	return new Promise(resolve => {
		$.getJSON(url, function(data) {
			resolve(data);
		});
	});
};

export const getFoodDataList = () => {
	return xhrFetch('api/');
};

export const getFoodReport = id => {
	if (!id) throw new Error('Cannot get food report: No id provided');
	return xhrFetch(`api/report/${id}`);
};

export const searchFoodItems = term => {
	return xhrFetch(`api/search/?q=${term}`);
};
