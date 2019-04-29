const _setTotal = total => ({
	type: 'SET_TOTAL',
	total
});

export const updateTotal = () => (dispatch, getState) => {
	const {
		foodItemList: { items }
	} = getState();

	const total = {
		calories: items
			.map(({ type: { nutrients }, count }) => {
				return nutrients.find(n => n.name === 'Energy').value * count;
			})
			.reduce(
				(totalCalories, itemCalories) => totalCalories + itemCalories,
				0
			)
	};
	dispatch(_setTotal(total));
};
