import { foodListCache } from '../app';

const _updateSuggestions = suggestions => ({
	type: 'UPDATE_SUGGESTIONS',
	suggestions
});

const filterSuggestions = (foodItemTypes, searchTerm) => {
	searchTerm = searchTerm && searchTerm.trim();
	if (!searchTerm) {
		return foodItemTypes.slice();
	}
	return foodItemTypes.filter(({ name }) => {
		const normalizedName = name && name.toLowerCase().trim();
		const normalizedSearchTerm = searchTerm.toLowerCase().trim();
		return normalizedName.includes(normalizedSearchTerm);
	});
};

export const updateSuggestions = () => (dispatch, getState) => {
	const {
		search: { term }
	} = getState();

	const data = foodListCache.getFoodData();

	dispatch(_updateSuggestions(filterSuggestions(data, term)));
};

export const closeSuggestions = () => ({
	type: 'CLOSE_SUGGESTIONS'
});

export const selectSuggestion = suggestionID => ({
	type: 'SELECT_SUGGESTION',
	suggestionID
});

export const nextSuggestion = () => ({
	type: 'NEXT_SUGGESTION'
});

export const prevSuggestion = () => ({
	type: 'PREV_SUGGESTION'
});
