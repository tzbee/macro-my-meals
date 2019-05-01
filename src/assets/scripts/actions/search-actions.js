import { foodListCache } from '../app';

export const setSearchTerm = term => ({
	type: 'SET_SEARCH_TERM',
	term
});

export const setSearchFocus = isFocused => ({
	type: 'SET_SEARCH_FOCUS',
	isFocused
});

export const clearSearch = () => ({
	type: 'CLEAR_SEARCH'
});

export const search = term => dispatch => {
	dispatch(_setLoading());
	foodListCache.search(term).then(results => {
		dispatch(_setSearchResults(results));
	});
};

const _setSearchResults = results => ({
	type: 'SET_SEARCH_RESULTS',
	results
});

export const _setLoading = () => ({
	type: 'SET_LOADING'
});
