import React from 'react';
import PropTypes from 'prop-types';

const QuantityInput = ({ className = '', value = 0, onChange }) => {
	const handleChange = e => {
		onChange(e.target.value);
	};
	return (
		<input
			className={`QuantityInput ${className}`}
			value={value}
			onChange={handleChange}
			placeholder="Food item quantity(g)"
		/>
	);
};

QuantityInput.displayName = 'QuantityInput';

QuantityInput.propTypes = {
	className: PropTypes.string,
	value: PropTypes.number,
	onChange: PropTypes.func
};

export default QuantityInput;
