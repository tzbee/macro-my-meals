import React from 'react';
import PropTypes from 'prop-types';

import QuantityInput from './QuantityInput';

const FoodItem = ({
	id,
	type,
	quantity = 0,
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

	return (
		<tr className="FoodItem">
			<td className="FoodItem-prop FoodItem-name">
				{type.name}
				<div className="FoodItem-caloriesPerItem">
					{type.nutrients.find(n => n.name === 'Energy').value} kcal
				</div>
			</td>
			<td className="FoodItem-prop FoodItem-count">
				<QuantityInput
					value={quantity}
					onChange={handleQuantityChange}
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
