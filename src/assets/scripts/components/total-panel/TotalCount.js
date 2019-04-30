import React from 'react';
import PropTypes from 'prop-types';

const TotalCount = ({ count }) => {
	return <div className="TotalCount">TOTAL: {count} kcal</div>;
};

TotalCount.displayName = 'TotalCount';

TotalCount.propTypes = {
	count: PropTypes.number
};

export default TotalCount;
