import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ className = '', results = [] }) => {
	return (
		<ul className={`SearchResults ${className}`}>
			{results.map(result => (
				<SearchResult key={'sr' + result.id} result={result} />
			))}
		</ul>
	);
};

SearchResults.displayName = 'SearchResults';

SearchResults.propTypes = {
	className: PropTypes.string,
	results: PropTypes.array
};

const SearchResult = ({ className = '', result }) => {
	return <li className={`SearchResult ${className}`}>{result.name}</li>;
};

SearchResult.displayName = 'SearchResult';

SearchResult.propTypes = {
	className: PropTypes.string,
	result: PropTypes.object
};

export default SearchResults;
