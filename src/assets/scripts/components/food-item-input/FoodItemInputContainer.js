import { connect } from 'react-redux';

import FoodItemInput from './FoodItemInput';
import { setSearchTerm, setSearchFocus } from '../../actions/search-actions';
import { addFoodListItem } from '../../actions/food-item-list-actions';

import {
	updateSuggestions,
	selectSuggestion,
	prevSuggestion,
	nextSuggestion
} from '../../actions/suggestions-actions';

const mapDispatchToProps = dispatch => {
	return {
		onFoodItemInputChange: searchTerm => {
			dispatch(setSearchTerm(searchTerm));
			dispatch(updateSuggestions());
		},
		onFocusChange: focusState => {
			dispatch(setSearchFocus(focusState));
		},
		onSuggestionClick: suggestionID => {
			dispatch(addFoodListItem(suggestionID));
		},
		onSuggestionMouseOver: suggestionID => {
			dispatch(selectSuggestion(suggestionID));
		},
		onMenuMouseLeave: () => {
			dispatch(selectSuggestion(null));
		},
		onUpKeyPressed: () => {
			dispatch(prevSuggestion());
		},
		onDownKeyPressed: () => {
			dispatch(updateSuggestions());
			dispatch(nextSuggestion());
		},
		onEnterPressed: suggestionID => {
			dispatch(addFoodListItem(suggestionID));
		}
	};
};

const mapStateToProps = ({ search, suggestions }) => {
	return {
		textContent: search.term,
		textFocused: search.isFocused,
		suggestions: suggestions.list,
		isActive: suggestions.isActive,
		selectedSuggestion: suggestions.selected
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FoodItemInput);
