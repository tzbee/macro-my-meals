const defaultState = {
	term: '',
	isFocused: true
};

const SearchReducer = (state = defaultState, { type, term, isFocused }) => {
	switch (type) {
		case 'SET_SEARCH_TERM':
			return Object.assign({}, state, { term });
		case 'SET_SEARCH_FOCUS':
			return Object.assign({}, state, { isFocused });
		case 'CLEAR_SEARCH':
			return Object.assign({}, state, { term: '' });
		default:
			return state;
	}
};

export default SearchReducer;
