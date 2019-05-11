// DetailsHeader.js;

import React from 'react';
import PropTypes from 'prop-types';

const DetailsHeader = ({ className = '', selectedTabID, onTabClick }) => {
	const onTabClickHandler = tabID => {
		onTabClick(tabID);
	};
	return (
		<div className={`DetailsHeader ${className}`}>
			<div
				className={`DetailsHeader-tab ${(selectedTabID === 'total' &&
					'DetailsHeader-tab--selected') ||
					''}`}
				onClick={() => onTabClickHandler('total')}
			>
				TOTAL
			</div>
			<div
				className={`DetailsHeader-tab ${(selectedTabID === 'item' &&
					'DetailsHeader-tab--selected') ||
					''}`}
				onClick={() => onTabClickHandler('item')}
			>
				ITEM
			</div>
		</div>
	);
};

DetailsHeader.displayName = 'DetailsHeader';

DetailsHeader.propTypes = {
	className: PropTypes.string,
	selectedTabID: PropTypes.string,
	onTabClick: PropTypes.func
};

export default DetailsHeader;
