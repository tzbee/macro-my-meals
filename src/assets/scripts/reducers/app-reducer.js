import searchReducer from './search-reducer';
import suggestionsReducer from './suggestions-reducer';
import foodItemListReducer from './food-item-list-reducer';
import totalReducer from './total-reducer';
import searchResultsReducer from './search-results-reducer';
import mobileReducer from './mobile-reducer';
import selectedItemReducer from './seleted-item-reducer';
import tabReducer from './tab-reducer';

export default (state = {}, action) => ({
	search: searchReducer(state.search, action),
	searchResults: searchResultsReducer(state.searchResults, action),
	suggestions: suggestionsReducer(state.suggestions, action),
	foodItemList: foodItemListReducer(state.foodItemList, action),
	total: totalReducer(state.total, action),
	mobile: mobileReducer(state.mobile, action),
	selectedItem: selectedItemReducer(state.selectedItem, action),
	tab: tabReducer(state.tab, action)
});
