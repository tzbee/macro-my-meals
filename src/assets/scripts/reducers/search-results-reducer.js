const defaultState = {
	list: []
};

const SearchResultsReducer = (state = defaultState, { type, results }) => {
	switch (type) {
		case 'SET_SEARCH_RESULTS':
			return {
				list: results.slice()
			};

		default:
			return state;
	}
};

export default SearchResultsReducer;
