const _setTotal = total => ({
	type: 'SET_TOTAL',
	total
});

// Hardcoded nutrient type IDs,
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

	debugger;

	const total = items.reduce(
		//quantity in g
		(
			totalNutrients,
			{ type: { nutrients }, quantity: { value, unit } }
		) => {
			nutrients.forEach(itemNutrient => {
				const itemNutrientID = itemNutrient.id;

				// nutrient value for 100g of the item
				const itemTypeNutrientValuePerUnit =
					itemNutrient.valueMap[unit];

				// nutrient value for {quantity} of the item
				const itemNutrientValue = itemTypeNutrientValuePerUnit * value;

				const totalForNutrient = totalNutrients[itemNutrientID];
				if (!totalForNutrient.unit)
					totalNutrients[itemNutrientID].unit = itemNutrient.unit;

				totalNutrients[itemNutrientID].value =
					totalNutrients[itemNutrientID].value +
					parseInt(itemNutrientValue);
			});
			return totalNutrients;
		},
		getDefaultTotal()
	);

	dispatch(_setTotal(total));
};
