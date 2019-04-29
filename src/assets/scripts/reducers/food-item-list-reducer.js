import {} from '../actions/food-item-list-actions';

const defaultState = {
	items: []
};

const foodItemList = (state = defaultState, { type, foodList }) => {
	switch (type) {
		case 'SET_FOOD_LIST':
			return Object.assign({}, { items: foodList.slice() });
		default:
			return state;
	}
};

export default foodItemList;
