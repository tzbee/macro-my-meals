const defaultState = false;

const MobileReducer = (state = defaultState, { type, mobile }) => {
	switch (type) {
		case 'SET_MOBILE':
			return mobile;

		default:
			return state;
	}
};

export default MobileReducer;
