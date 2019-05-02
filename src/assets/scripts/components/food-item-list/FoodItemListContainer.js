import { connect } from 'react-redux';
import FoodItemList from './FoodItemList';
import {
	removeFoodListItem,
	updateQuantity
} from '../../actions/food-item-list-actions';

import { setSearchFocus } from '../../actions/search-actions';

const mapDispatchToProps = dispatch => {
	return {
		onFoodItemRemove: foodItemID =>
			dispatch(removeFoodListItem(foodItemID)),
		onQuantityChange: (newQuantity, foodItemID) => {
			dispatch(updateQuantity(newQuantity, foodItemID));
		},
		onSearchClick: () => {
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
