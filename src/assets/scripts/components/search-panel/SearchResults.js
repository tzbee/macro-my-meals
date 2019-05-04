import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../loader/Loader';

const SearchResults = ({
	className = '',
	results = {},
	loading = false,
	onAddClick
}) => {
	return (
		<div className="SearchResults">
			{loading ? (
				<div className="SearchResults-loading">
					<Loader />
				</div>
			) : results.err ? (
				<div className="SearchResults-err">
					An error occured while searching: {results.err.message}
				</div>
			) : results.data === null ? (
				<div className="SearchResults-noResults">
					No results found for this query
				</div>
			) : (
				<ul className={`SearchResults-results ${className}`}>
					{results.data.map(result => (
						<SearchResult
							key={'sr' + result.id}
							result={result}
							onAddClick={onAddClick}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

SearchResults.displayName = 'SearchResults';

SearchResults.propTypes = {
	className: PropTypes.string,
	results: PropTypes.object,
	onAddClick: PropTypes.func,
	loading: PropTypes.bool
};

const SearchResult = ({ className = '', result, onAddClick }) => {
	const handleAddClick = () => {
		onAddClick(result.id);
	};
	return (
		<li className={`SearchResult ${className}`}>
			<div className="SearchResult-name">{result.name}</div>
			<div className="SearchResult-add">
				<AddBtn onClick={handleAddClick} />
			</div>
		</li>
	);
};

const AddBtn = ({ className = '', onClick }) => {
	const handleClick = e => {
		e.stopPropagation();
		onClick();
	};
	return (
		<button className={`AddBtn mmm-btn${className}`} onClick={handleClick}>
			Add +
		</button>
	);
};

AddBtn.displayName = 'AddBtn';

AddBtn.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func
};

SearchResult.displayName = 'SearchResult';

SearchResult.propTypes = {
	className: PropTypes.string,
	result: PropTypes.object,
	onAddClick: PropTypes.func
};

export default SearchResults;
