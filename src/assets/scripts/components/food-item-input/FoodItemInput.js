import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SuggestionMenu from './SuggestionMenu';

class FoodItemInput extends Component {
	constructor(props) {
		super(props);
		this.foodItemInputText = React.createRef();
	}

	componentDidUpdate() {
		const { textFocused = true } = this.props;

		if (textFocused) {
			this.foodItemInputText.current.focus();
		}
	}

	render() {
		const {
			onFocusChange,
			textContent,
			onFoodItemInputChange,
			onSubmit,
			onSuggestionClick,
			onSuggestionMouseOver,
			onMenuMouseLeave,
			onUpKeyPressed,
			onDownKeyPressed,
			onEnterPressed,
			suggestions,
			isActive,
			selectedSuggestion
		} = this.props;

		const handleTextValueChange = e => {
			onFoodItemInputChange(e.target.value);
		};

		const handleOnSubmit = e => {
			e.preventDefault();
			onSubmit(textContent);
		};

		const handleOnBlur = e => {
			e.preventDefault();
			onFocusChange(false);
		};

		const handleOnFocus = e => {
			e.preventDefault();
			onFocusChange(true);
		};

		const handleSuggestionClick = suggestionID => {
			onSuggestionClick(suggestionID);
		};

		const handleOnKeyUp = e => {
			const key = e.key;
			if (key === 'ArrowUp') {
				onUpKeyPressed();
			} else if (key === 'ArrowDown') {
				onDownKeyPressed();
			} else if (key === 'Enter') {
				onEnterPressed(selectedSuggestion);
			}
		};

		return (
			<form className="FoodItemInput" onSubmit={handleOnSubmit}>
				<input
					className="FoodItemInput-search"
					value={textContent}
					onChange={handleTextValueChange}
					type="text"
					placeholder="Add food item"
					autoFocus
					ref={this.foodItemInputText}
					onBlur={handleOnBlur}
					onFocus={handleOnFocus}
					onKeyUp={handleOnKeyUp}
				/>
				<SuggestionMenu
					suggestions={suggestions}
					onSuggestionClick={handleSuggestionClick}
					isActive={isActive}
					selectedItem={selectedSuggestion}
					onSuggestionMouseOver={onSuggestionMouseOver}
					onMenuMouseLeave={onMenuMouseLeave}
				/>
			</form>
		);
	}
}

FoodItemInput.displayName = 'FoodItemInput';

FoodItemInput.propTypes = {
	textContent: PropTypes.string,
	onFoodItemInputChange: PropTypes.func,
	onSubmit: PropTypes.func,
	suggestions: PropTypes.array,
	onSuggestionClick: PropTypes.func,
	textFocused: PropTypes.bool,
	onFocusChange: PropTypes.func,
	isActive: PropTypes.bool,
	selectedSuggestion: PropTypes.string,
	onSuggestionMouseOver: PropTypes.func,
	onMenuMouseLeave: PropTypes.func,
	onUpKeyPressed: PropTypes.func,
	onDownKeyPressed: PropTypes.func,
	onEnterPressed: PropTypes.func
};
export default FoodItemInput;
