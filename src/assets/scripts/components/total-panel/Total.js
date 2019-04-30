import React from 'react';
import PropTypes from 'prop-types';

const Total = ({ className = '', count }) => {
	return (
		<div className={`Total ${className}`}>
			<div className="Total-energy">Energy: {count}</div>
		</div>
	);
};

Total.displayName = 'Total';

Total.propTypes = {
	className: PropTypes.string,
	count: PropTypes.number
};

export default Total;
