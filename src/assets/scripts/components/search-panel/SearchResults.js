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
		<button className={`AddBtn ${className}`} onClick={handleClick}>
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
