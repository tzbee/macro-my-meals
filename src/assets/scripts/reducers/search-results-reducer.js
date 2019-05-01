const defaultState = {
	loading: false,
	list: []
};

const SearchResultsReducer = (state = defaultState, { type, results }) => {
	switch (type) {
		case 'SET_SEARCH_RESULTS':
			return {
				loading: false,
				list: results && results.slice()
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
