const defaultState = {
	calories: 0
};

const totalReducer = (state = defaultState, { type, total }) => {
	switch (type) {
		case 'SET_TOTAL':
			return Object.assign({}, total);
		default:
			return state;
	}
};

export default totalReducer;
