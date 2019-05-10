// DetailsHeader.js;

import React from 'react';
import PropTypes from 'prop-types';

const DetailsHeader = ({ className = '', selectedTabID }) => {
	return (
		<div className={`DetailsHeader ${className}`}>
			<div
				className={`DetailsHeader-tab ${(selectedTabID === 'total' &&
					'DetailsHeader-tab--selected') ||
					''}`}
			>
				TOTAL
			</div>
			<div
				className={`DetailsHeader-tab ${(selectedTabID === 'item' &&
					'DetailsHeader-tab--selected') ||
					''}`}
			>
				ITEM
			</div>
		</div>
	);
};

DetailsHeader.displayName = 'DetailsHeader';

DetailsHeader.propTypes = {
	className: PropTypes.string,
	selectedTabID: PropTypes.string
};

export default DetailsHeader;
