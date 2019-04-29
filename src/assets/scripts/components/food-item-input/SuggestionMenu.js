import React from 'react';
import PropTypes from 'prop-types';

const SuggestionMenu = ({
	suggestions = [],
	isActive = true,
	onSuggestionClick,
	onSuggestionMouseOver,
	onMenuMouseLeave,
	selectedItem
}) => {
	const isActiveClass = isActive
		? 'SuggestionMenu-active'
		: 'SuggestionMenu-inactive';

	return (
		<div className={`SuggestionMenu ${isActiveClass}`}>
			<ul className="SuggestionMenu-menu" onMouseLeave={onMenuMouseLeave}>
				{suggestions.map(suggestion => (
					<SuggestionMenuItem
						key={'suggestion-item-' + suggestion.id}
						isSelected={suggestion.id === selectedItem}
						onClick={onSuggestionClick}
						onMouseOver={onSuggestionMouseOver}
						{...suggestion}
					/>
				))}
			</ul>
		</div>
	);
};

SuggestionMenu.displayName = 'SuggestionMenu';

SuggestionMenu.propTypes = {
	suggestions: PropTypes.array,
	onSuggestionClick: PropTypes.func,
	isActive: PropTypes.bool,
	selectedItem: PropTypes.string,
	onSuggestionMouseOver: PropTypes.func,
	onMenuMouseLeave: PropTypes.func
};

const SuggestionMenuItem = ({
	id,
	name,
	caloriesPerItem,
	isSelected,
	onClick,
	onMouseOver
}) => {
	const handleClick = () => {
		onClick(id);
	};

	const handleMouseOver = () => {
		onMouseOver(id);
	};

	const isSelectedClass = isSelected ? 'selected' : '';
	return (
		<li
			className={`SuggestionMenuItem ${isSelectedClass}`}
			onMouseDown={handleClick}
			onMouseOver={handleMouseOver}
		>
			{name}
		</li>
	);
};

SuggestionMenuItem.displayName = 'SuggestionMenuItem';

SuggestionMenuItem.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	onClick: PropTypes.func,
	isSelected: PropTypes.bool,
	onMouseOver: PropTypes.func,
	caloriesPerItem: PropTypes.number
};

export default SuggestionMenu;
