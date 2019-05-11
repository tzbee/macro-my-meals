import React from 'react';
import PropTypes from 'prop-types';

import TotalDetails from './TotalDetails';

const TotalDetailsTab = ({
	className = '',
	selectedTabID = 'total',
	totalDetails = {},
	itemDetails = {}
}) => {
	return (
		<div className={`TotalDetailsTab ${className}`}>
			<div
				className={`Details-total ${
					selectedTabID === 'total' ? 'Details-total--selected' : ''
				}`}
			>
				<TotalDetails total={totalDetails} />
			</div>
			<div
				className={`Details-total ${
					selectedTabID === 'item' ? 'Details-total--selected' : ''
				}`}
			>
				<TotalDetails total={itemDetails} />
			</div>
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
