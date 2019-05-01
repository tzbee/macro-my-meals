import React from 'react';
import PropTypes from 'prop-types';

import QuantityInput from './QuantityInput';

const FoodItem = ({
	id,
	type,
	quantity = { value: 0, unit: 'g' },
	onRemoveClick,
	onQuantityChange
}) => {
	const handleRemoveClick = e => {
		e.stopPropagation();
		onRemoveClick(id);
	};

	const handleQuantityChange = newQuantity => {
		onQuantityChange(newQuantity, id);
	};

	const valueMap = type.nutrients[0].valueMap;

	const unitOptionsLabels = Object.keys(valueMap).map(unit => {
		const {
			eq: { value: eqValue, unit: eqUnit }
		} = valueMap[unit];
		const eq = eqValue && eqUnit ? ` (${eqValue} ${eqUnit})` : '';
		return `${unit}${eq}`;
	});

	return (
		<tr className="FoodItem">
			<td className="FoodItem-prop FoodItem-name">
				{type.name}
				<div className="FoodItem-caloriesPerItem">
					{type.nutrients.find(n => n.name === 'Energy').valueMap['g']
						.value * 100}
					kcal / 100g
				</div>
			</td>
			<td className="FoodItem-prop FoodItem-count">
				<QuantityInput
					onChange={handleQuantityChange}
					unitOptions={{
						labels: unitOptionsLabels,
						data: Object.keys(valueMap)
					}}
					{...quantity}
				/>
			</td>
			<td className="FoodItem-prop FoodItem-remove">
				<a className="" href="#" onClick={handleRemoveClick}>
					Remove
				</a>
			</td>
		</tr>
	);
};

FoodItem.displayName = 'FoodItem';

FoodItem.propTypes = {
	name: PropTypes.string,
	count: PropTypes.number,
	onRemoveClick: PropTypes.func,
	id: PropTypes.string,
	type: PropTypes.object,
	plus: PropTypes.func,
	minus: PropTypes.func,
	quantity: PropTypes.number,
	onQuantityChange: PropTypes.func
};

export default FoodItem;
