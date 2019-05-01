const _setTotal = total => ({
	type: 'SET_TOTAL',
	total
});

// Hardcoded nutrient type ids,
// Taken from the food database api
const DEFAULT_TOTAL_IDS = [
	{ id: '203', name: 'Protein' },
	{ id: '204', name: 'Total lipid (fat)' },
	{ id: '205', name: 'Carbohydrate, by difference' },
	{ id: '208', name: 'Energy' },
	{ id: '255', name: 'Water' },
	{ id: '269', name: 'Sugars, total' },
	{ id: '291', name: 'Fiber, total dietary' }
];

const getDefaultTotal = () =>
	DEFAULT_TOTAL_IDS.reduce((res, { id, name }) => {
		res[id] = {
			id,
			name,
			value: 0
		};
		return res;
	}, {});

export const updateTotal = () => (dispatch, getState) => {
	const {
		foodItemList: { items }
	} = getState();

	const total = items
		.map(({ type: { nutrients }, count }) => {
			return nutrients.filter(
				nutrient => nutrient.group === 'Proximates'
			);
		})
		.reduce((totalNutrients, itemNutrients) => {
			itemNutrients.forEach(itemNutrient => {
				const itemNutrientID = itemNutrient['nutrient_id'];
				const totalForNutrient = totalNutrients[itemNutrientID];
				if (!totalForNutrient) {
					totalNutrients[itemNutrientID] = {
						id: itemNutrientID,
						name: itemNutrient.name,
						value: 0,
						unit: itemNutrient.unit
					};
				}

				totalNutrients[itemNutrientID].value =
					totalNutrients[itemNutrientID].value +
					parseInt(itemNutrient.value);
			});
			return totalNutrients;
		}, getDefaultTotal());

	dispatch(_setTotal(total));
};
