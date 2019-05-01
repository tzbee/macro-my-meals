import SearchResults from './SearchResults';
import { connect } from 'react-redux';
import { addFoodListItem } from '../../actions/food-item-list-actions';

const mapDispatchToProps = dispatch => {
	return {
		onAddClick: foodItemID => dispatch(addFoodListItem(foodItemID))
	};
};

const mapStateToProps = ({ searchResults }) => ({
	loading: searchResults.loading,
	results: searchResults.list
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResults);
