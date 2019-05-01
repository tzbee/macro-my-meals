import React from 'react';
import PropTypes from 'prop-types';

const TotalDetails = ({ className = '', total }) => {
	return (
		<table className={`TotalDetails ${className}`}>
			<tbody>
				{Object.values(total).map(totalProp => (
					<TotalDetailsProp
						key={'tp-' + totalProp.id}
						{...totalProp}
					/>
				))}
			</tbody>
		</table>
	);
};

const TotalDetailsProp = ({ className = '', name, value, unit }) => {
	return (
		<tr className={`TotalDetailsProp ${className}`}>
			<td className="TotalDetailsProp-name">{name} </td>
			<td className="TotalDetailsProp-valueUnit">
				{value} {unit}
			</td>
		</tr>
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
