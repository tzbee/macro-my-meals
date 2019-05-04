const fetchJSON = url => {
	return fetch(url).then(res => {
		if (res.status !== 200) {
			throw new Error(
				`Could not fetch ${url}: status: ${res.statusText}`
			);
		} else {
			return res.json();
		}
	});
};

export const getFoodDataList = () => {
	return fetchJSON('api/');
};

export const getFoodReport = id => {
	if (!id) throw new Error('Cannot get food report: No id provided');
	return fetchJSON(`api/report/${id}`);
};

export const searchFoodItems = term => {
	return fetchJSON(`api/search/?q=${term}`);
};
