import { foodListCache } from '../app';

export const setSelectedItem = foodItemID => dispatch => {
	foodListCache.getFoodData(foodItemID).then(foodData => {
		dispatch(_setSelectedItem(foodData));
	});
};

const _setSelectedItem = foodItem => ({
	type: 'SET_SELECTED_ITEM',
	foodItem
});
