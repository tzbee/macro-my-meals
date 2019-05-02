import { updateTotal } from './total-actions';
import { clearSearch, setSearchFocus } from './search-actions';

import { foodListCache } from '../app';

const _setFoodList = foodList => ({
	type: 'SET_FOOD_LIST',
	foodList
});

export const removeFoodListItem = foodItemID => dispatch => {
	const foodList = foodListCache.remove(foodItemID);
	dispatch(_setFoodList(foodList));
	dispatch(updateTotal());
};

export const addFoodListItem = foodItemTypeID => dispatch => {
	foodListCache.add(foodItemTypeID).then(foodList => {
		dispatch(_setFoodList(foodList));
		dispatch(clearSearch());
		dispatch(setSearchFocus(false));
		dispatch(updateTotal());
	});
};

export const loadFoodList = () => dispatch => {
	const foodList = foodListCache.get();
	dispatch(_setFoodList(foodList));
	dispatch(clearSearch());
	dispatch(updateTotal());
};

export const updateQuantity = (newQuantity, foodItemID) => dispatch => {
	const foodList = foodListCache.updateQuantity(newQuantity, foodItemID);
	dispatch(_setFoodList(foodList));
	dispatch(updateTotal());
};
