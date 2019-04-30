import React from 'react';
import PropTypes from 'prop-types';

const FoodItem = ({ id, type, count, onRemoveClick, plus, minus }) => {
	const handleRemoveClick = e => {
		e.stopPropagation();
		onRemoveClick(id);
	};

	const handlePlusCount = () => {
		plus(id);
	};
	const handleMinusCount = () => {
		minus(id);
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
				<Count
					count={count}
					plus={handlePlusCount}
					minus={handleMinusCount}
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

const Count = ({ count, plus, minus }) => {
	return (
		<div className="Count">
			<div className="Count-minus Count-prop Count-btn-wrp">
				<button className="Count-button" onClick={minus}>
					-
				</button>
			</div>
			<div className="Count-value Count-prop">{count}</div>
			<div className="Count-plus Count-prop Count-btn-wrp">
				<button className="Count-button" onClick={plus}>
					+
				</button>
			</div>
		</div>
	);
};

Count.displayName = 'Count';

Count.propTypes = {
	count: PropTypes.number,
	plus: PropTypes.func,
	minus: PropTypes.func
};

FoodItem.displayName = 'FoodItem';

FoodItem.propTypes = {
	name: PropTypes.string,
	count: PropTypes.number,
	onRemoveClick: PropTypes.func,
	id: PropTypes.string,
	type: PropTypes.object,
	plus: PropTypes.func,
	minus: PropTypes.func
};

export default FoodItem;
