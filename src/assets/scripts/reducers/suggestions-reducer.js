const defaultState = {
	isActive: false,
	list: [],
	selected: ''
};

const SuggestionsReducer = (
	state = defaultState,
	{ type, suggestionID, suggestions }
) => {
	let currentSelectedItem,
		currentSelectedIndex,
		newSelectedItem,
		newSelectedIndex;
	switch (type) {
		case 'UPDATE_SUGGESTIONS':
			return Object.assign({}, state, {
				isActive: true,
				list: suggestions
			});
		case 'CLOSE_SUGGESTIONS':
			return Object.assign({}, state, { isActive: false });
		case 'SELECT_SUGGESTION':
			return Object.assign({}, state, { selected: suggestionID });
		case 'NEXT_SUGGESTION':
			currentSelectedItem = state.list.find(
				foodItemType => foodItemType.id === state.selected
			);

			currentSelectedIndex = state.list.indexOf(currentSelectedItem);
			newSelectedIndex = currentSelectedIndex + 1;
			newSelectedItem = state.list[newSelectedIndex];

			if (!newSelectedItem) {
				newSelectedItem = state.list[0];
			}

			return Object.assign({}, state, { selected: newSelectedItem.id });
		case 'PREV_SUGGESTION':
			currentSelectedItem = state.list.find(
				foodItemType => foodItemType.id === state.selected
			);

			currentSelectedIndex = state.list.indexOf(currentSelectedItem);
			newSelectedIndex = currentSelectedIndex - 1;
			newSelectedItem = state.list[newSelectedIndex];

			if (!newSelectedItem) {
				newSelectedItem = null;
			}

			return Object.assign({}, state, {
				selected: newSelectedItem && newSelectedItem.id
			});
		default:
			return state;
	}
};

export default SuggestionsReducer;
