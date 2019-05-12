// ItemDetailsPanel.js

import React from 'react';
import PropTypes from 'prop-types';

const ItemDetailsPanel = ({ className = '' }) => {
	return (
		<div className={`ItemDetailsPanel ${className}`}>ItemDetailsPanel</div>
	);
};

ItemDetailsPanel.displayName = 'ItemDetailsPanel';

ItemDetailsPanel.propTypes = {
	className: PropTypes.string
};

export default ItemDetailsPanel;
