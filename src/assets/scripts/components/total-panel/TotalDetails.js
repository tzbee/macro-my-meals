import React from 'react';
import PropTypes from 'prop-types';

const TotalDetails = ({ className = '', total }) => {
	return (
		<div className={`TotalDetails ${className}`}>
			{Object.values(total).map(totalProp => (
				<TotalDetailsProp key={'tp-' + totalProp.id} {...totalProp} />
			))}
		</div>
	);
};

const TotalDetailsProp = ({ className = '', name, value, unit }) => {
	return (
		<div className={`TotalDetailsProp ${className}`}>
			<div className="TotalDetailsProp-name">{name} </div>
			<div className="TotalDetailsProp-valueUnit">
				{value} {unit}
			</div>
		</div>
	);
};

TotalDetailsProp.displayName = 'TotalDetailsProp';

TotalDetailsProp.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.number,
	unit: PropTypes.string
};

TotalDetails.displayName = 'Total';

TotalDetails.propTypes = {
	className: PropTypes.string,
	count: PropTypes.number,
	total: PropTypes.object
};

export default TotalDetails;
