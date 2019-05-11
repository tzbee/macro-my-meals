import SearchResults from './SearchResults';
import { connect } from 'react-redux';
import { addFoodListItem } from '../../actions/food-item-list-actions';
import { setSelectedItem } from '../../actions/selected-item-actions';
import { setTab } from '../../actions/tab-actions';

const mapDispatchToProps = dispatch => {
	return {
		onAddClick: foodItemID => dispatch(addFoodListItem(foodItemID)),
		onClick: resultID => {
			dispatch(setSelectedItem(resultID));
			dispatch(setTab('item'));
		}
	};
};

const mapStateToProps = ({ searchResults }) => ({
	loading: searchResults.loading,
	results: searchResults.results
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResults);
