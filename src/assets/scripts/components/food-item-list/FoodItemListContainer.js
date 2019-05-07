import { connect } from 'react-redux';
import FoodItemList from './FoodItemList';
import {
	removeFoodListItem,
	updateQuantity
} from '../../actions/food-item-list-actions';

import { setSearchFocus, setFolded } from '../../actions/search-actions';

const mapDispatchToProps = dispatch => {
	return {
		onFoodItemRemove: foodItemID =>
			dispatch(removeFoodListItem(foodItemID)),
		onQuantityChange: (newQuantity, foodItemID) => {
			dispatch(updateQuantity(newQuantity, foodItemID));
		},
		onSearchClick: () => {
			dispatch(setFolded(false));
			dispatch(setSearchFocus(true));
		}
	};
};

const mapStateToProps = ({ foodItemList }) => ({
	foodItems: foodItemList.items
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FoodItemList);
