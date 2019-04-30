import React from 'react';
import PropTypes from 'prop-types';

import TotalContainer from './TotalContainer';

const TotalPanel = ({ className = '' }) => {
	return (
		<div className={`TotalPanel ${className}`}>
			<div className="TotalPanel-header">TOTAL</div>
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
