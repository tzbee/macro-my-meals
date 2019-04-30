import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ className = '', results = [], onAddClick }) => {
	return (
		<ul className={`SearchResults ${className}`}>
			{results.map(result => (
				<SearchResult
					key={'sr' + result.id}
					result={result}
					onAddClick={onAddClick}
				/>
			))}
		</ul>
	);
};

SearchResults.displayName = 'SearchResults';

SearchResults.propTypes = {
	className: PropTypes.string,
	results: PropTypes.array,
	onAddClick: PropTypes.func
};

const SearchResult = ({ className = '', result, onAddClick }) => {
	const handleAddClick = () => {
		onAddClick(result.id);
	};
	return (
		<li className={`SearchResult ${className}`}>
			<div className="SearchResult-name">{result.name}</div>
			<div className="SearchResult-add" onClick={handleAddClick}>
				+
			</div>
		</li>
	);
};

SearchResult.displayName = 'SearchResult';

SearchResult.propTypes = {
	className: PropTypes.string,
	result: PropTypes.object,
	onAddClick: PropTypes.func
};

export default SearchResults;
