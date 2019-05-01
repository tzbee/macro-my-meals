import React from 'react';
import PropTypes from 'prop-types';

const QuantityInput = ({
	className = '',
	value = 0,
	unit = 'g',
	unitOptions = {},
	onChange
}) => {
	const handleValueChange = newValue => {
		onChange({ value: newValue, unit });
	};

	const handleUnitChange = newUnit => {
		onChange({ value, unit: newUnit });
	};

	return (
		<div className={`QuantityInput ${className}`}>
			<QuantityValue value={value} onChange={handleValueChange} />
			<QuantityUnit
				selectedUnit={unit}
				unitOptions={unitOptions}
				onChange={handleUnitChange}
			/>
		</div>
	);
};

QuantityInput.displayName = 'QuantityInput';

QuantityInput.propTypes = {
	className: PropTypes.string,
	value: PropTypes.number,
	onChange: PropTypes.func,
	unit: PropTypes.string,
	unitOptions: PropTypes.object
};

const QuantityValue = ({ className = '', value = 0, onChange }) => {
	const handleChange = e => {
		if (!e.target.value) {
			onChange('');
		} else {
			const quantity = parseInt(e.target.value);
			if (!isNaN(quantity)) {
				onChange(quantity);
			} else {
				onChange(value);
			}
		}
	};
	return (
		<input
			className={`QuantityValue ${className}`}
			value={value}
			onChange={handleChange}
			placeholder="Qty"
		/>
	);
};

QuantityValue.displayName = 'QuantityValue';

QuantityValue.propTypes = {
	className: PropTypes.string,
	value: PropTypes.number,
	onChange: PropTypes.func
};

const QuantityUnit = ({
	className = '',
	unitOptions = {},
	selectedUnit,
	onChange
}) => {
	const handleChange = e => {
		onChange(e.target.value);
	};
	return (
		<select
			className={`QuantityUnit ${className}`}
			onChange={handleChange}
			value={selectedUnit}
		>
			{unitOptions.data.map((unitOption, i) => (
				<option
					key={'uo-' + unitOption}
					className="QuantityUnit-option"
					value={unitOption}
				>
					{unitOptions.labels[i]}
				</option>
			))}
		</select>
	);
};

QuantityUnit.displayName = 'QuantityUnit';

QuantityUnit.propTypes = {
	className: PropTypes.string,
	unitOptions: PropTypes.object,
	selectedUnit: PropTypes.string,
	onChange: PropTypes.func
};

export default QuantityInput;
