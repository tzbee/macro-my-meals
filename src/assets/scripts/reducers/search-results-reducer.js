const defaultState = {
	loading: false,
	results: {
		err: false,
		data: []
	}
};

const SearchResultsReducer = (state = defaultState, { type, results }) => {
	switch (type) {
		case 'SET_SEARCH_RESULTS':
			return {
				loading: false,
				results: results
			};

		case 'SET_LOADING':
			return {
				loading: true,
				list: []
			};
		default:
			return state;
	}
};

export default SearchResultsReducer;
