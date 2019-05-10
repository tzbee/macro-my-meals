const defaultState = {
	tabID: null
};

const tabReducer = (state = defaultState, { type, tabID }) => {
	switch (type) {
		case 'SET_TAB':
			return {
				tabID
			};

		default:
			return state;
	}
};

export default tabReducer;
