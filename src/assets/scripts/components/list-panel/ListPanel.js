import React from 'react';
import PropTypes from 'prop-types';

import FoodItemListContainer from '../food-item-list/FoodItemListContainer';

const ListPanel = ({ className = '' }) => {
	return (
		<div className={`ListPanel ${className}`}>
			<div className="ListPanel-header">Your food items</div>
			<div className="ListPanel-content">
				<FoodItemListContainer />
			</div>
		</div>
	);
};

ListPanel.displayName = 'ListPanel';

ListPanel.propTypes = {
	className: PropTypes.string
};

export default ListPanel;
