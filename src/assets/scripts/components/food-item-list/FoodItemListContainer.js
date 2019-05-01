import { connect } from 'react-redux';
import FoodItemList from './FoodItemList';
import {
	removeFoodListItem,
	plusCount,
	minusCount,
	updateQuantity
} from '../../actions/food-item-list-actions';

import { updateTotal } from '../../actions/total-actions';

const mapDispatchToProps = dispatch => {
	return {
		onFoodItemRemove: foodItemID =>
			dispatch(removeFoodListItem(foodItemID)),
		plus: foodItemID => {
			dispatch(plusCount(foodItemID));
			dispatch(updateTotal());
		},
		minus: foodItemID => {
			dispatch(minusCount(foodItemID));
			dispatch(updateTotal());
		},
		onQuantityChange: (newQuantity, foodItemID) => {
			dispatch(updateQuantity(newQuantity, foodItemID));
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
