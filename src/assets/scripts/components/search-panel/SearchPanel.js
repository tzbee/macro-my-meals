import React from 'react';
import PropTypes from 'prop-types';
import FoodItemInputContainer from '../food-item-input/FoodItemInputContainer';

const SearchPanel = ({ className = '' }) => {
	return (
		<div className={`SearchPanel ${className}`}>
			<FoodItemInputContainer />
		</div>
	);
};

SearchPanel.displayName = 'SearchPanel';

SearchPanel.propTypes = {
	className: PropTypes.string
};

export default SearchPanel;
