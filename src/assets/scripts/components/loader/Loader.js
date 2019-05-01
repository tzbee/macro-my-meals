import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ className = '' }) => {
	return (
		<div className={`Loader ${className}`}>
			<span className="Loader-spinner fa fa-circle-notch fa-spin" />
		</div>
	);
};

Loader.displayName = 'Loader';

Loader.propTypes = {
	className: PropTypes.string
};

export default Loader;
