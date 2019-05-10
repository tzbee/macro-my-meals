import React from 'react';
import PropTypes from 'prop-types';

import TotalContainer from './TotalContainer';
import DetailsHeaderContainer from './DetailsHeaderContainer';

const TotalPanel = ({ className = '' }) => {
	return (
		<div className={`TotalPanel ${className}`}>
			<div className="TotalPanel-header">
				<DetailsHeaderContainer />
			</div>
			<div className="TotalPanel-content">
				<TotalContainer />
			</div>
		</div>
	);
};

TotalPanel.displayName = 'TotalPanel';

TotalPanel.propTypes = {
	className: PropTypes.string
};

export default TotalPanel;
