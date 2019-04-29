import React from 'react';
import PropTypes from 'prop-types';
import SearchBarComponent from './SearchBarComponent';
import SearchResultsComponent from './SearchResultsComponent';

const SearchPanel = ({ className = '' }) => {
	return (
		<div className={`SearchPanel ${className}`}>
			<div className="SearchPanel-header">
				<SearchBarComponent />
			</div>
			<div className="SearchPanel-content">
				<SearchResultsComponent />
			</div>
		</div>
	);
};

SearchPanel.displayName = 'SearchPanel';

SearchPanel.propTypes = {
	className: PropTypes.string
};

export default SearchPanel;
