import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ value, className = '', onChange, onSubmit }) => {
	const handleChange = e => {
		onChange(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(value);
	};
	return (
		<form className={`SearchBar ${className}`} onSubmit={handleSubmit}>
			<input
				value={value}
				className="SearchBar-search"
				placeholder="Search food item"
				onChange={handleChange}
			/>
		</form>
	);
};

SearchBar.displayName = 'SearchBar';

SearchBar.propTypes = {
	className: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

export default SearchBar;
