import searchReducer from './search-reducer';
import suggestionsReducer from './suggestions-reducer';
import foodItemListReducer from './food-item-list-reducer';
import totalReducer from './total-reducer';

export default (state = {}, action) => ({
	search: searchReducer(state.search, action),
	suggestions: suggestionsReducer(state.suggestions, action),
	foodItemList: foodItemListReducer(state.foodItemList, action),
	total: totalReducer(state.total, action)
});
