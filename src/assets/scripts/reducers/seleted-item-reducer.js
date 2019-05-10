const defaultState = {
	item: {}
};

const selectedItemReducer = (state = defaultState, { type, foodItem }) => {
	switch (type) {
		case 'SET_SELECTED_ITEM':
			return {
				item: foodItem
			};

		default:
			return state;
	}
};

export default selectedItemReducer;
