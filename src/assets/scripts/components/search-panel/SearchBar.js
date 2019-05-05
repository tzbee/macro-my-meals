import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.searchBarRef = createRef();
	}

	componentDidMount() {
		this._updateFocus();
	}
	componentDidUpdate() {
		this._updateFocus();
	}

	_updateFocus() {
		const { isFocused = false } = this.props;

		if (isFocused) this.searchBarRef.current.focus();
		else this.searchBarRef.current.blur();
	}
	render() {
		const {
			className = '',
			value,
			onFocus,
			onChange,
			onSubmit
		} = this.props;

		const handleChange = e => {
			onChange(e.target.value);
		};
		const handleSubmit = e => {
			e.preventDefault();
			onSubmit(value);
		};
		const handleOnFocus = () => {
			onFocus(true);
		};
		const handleOnBlur = () => {
			onFocus(false);
		};
		const handleSearchBtnClick = () => {
			onSubmit(value);
		};
		return (
			<form className={`SearchBar ${className}`} onSubmit={handleSubmit}>
				<input
					value={value}
					className="SearchBar-search"
					placeholder="Search food item"
					onChange={handleChange}
					ref={this.searchBarRef}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
				/>
				<button
					className="SearchBar-btn"
					onClick={handleSearchBtnClick}
				>
					<span className="fa fa-search" />
				</button>
			</form>
		);
	}
}

SearchBar.displayName = 'SearchBar';

SearchBar.propTypes = {
	className: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	isFocused: PropTypes.bool,
	onFocus: PropTypes.func
};

export default SearchBar;
