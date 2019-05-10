import React from 'react';
import PropTypes from 'prop-types';

import TotalDetails from './TotalDetails';

const TotalDetailsTab = ({
	className = '',
	selectedTabID,
	totalDetails,
	itemDetails
}) => {
	return (
		<div className={`TotalDetailsTab ${className}`}>
			<TotalDetails
				className={`'Details-total' ${
					selectedTabID === 'total' ? 'Details-total--selected' : ''
				}`}
				total={totalDetails}
			/>
			<TotalDetails
				className={`'Details-total' ${
					selectedTabID === 'item' ? 'Details-total--selected' : ''
				}`}
				total={itemDetails}
			/>
		</div>
	);
};

TotalDetailsTab.displayName = 'TotalDetailsTab';

TotalDetailsTab.propTypes = {
	className: PropTypes.string,
	selectedTabID: PropTypes.string,
	totalDetails: PropTypes.object,
	itemDetails: PropTypes.object
};

export default TotalDetailsTab;
