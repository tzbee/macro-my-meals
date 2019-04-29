import { updateSuggestions, closeSuggestions } from './suggestions-actions.js';

export const setSearchTerm = term => ({
	type: 'SET_SEARCH_TERM',
	term
});

const _setSearchFocus = isFocused => ({
	type: 'SET_SEARCH_FOCUS',
	isFocused
});

export const setSearchFocus = isFocused => dispatch => {
	dispatch(_setSearchFocus(isFocused));

	if (isFocused) {
		dispatch(updateSuggestions());
	} else {
		dispatch(closeSuggestions());
	}
};

export const clearSearch = () => ({
	type: 'CLEAR_SEARCH'
});
