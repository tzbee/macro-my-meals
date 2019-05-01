import React from 'react';
import PropTypes from 'prop-types';

import FoodItem from './FoodItem';

const EmptyFoodItemList = ({ className = '', onSearchClick }) => {
	const handleSearchClick = () => {
		onSearchClick();
	};
	return (
		<div className={`FoodItemList-empty ${className}`}>
			You have no food items yet, you can find one using the{' '}
			<a
				href="#"
				className="FoodItemList-goSearch"
				onClick={handleSearchClick}
			>
				search
			</a>{' '}
			functionality.
		</div>
	);
};

EmptyFoodItemList.displayName = 'EmptyFoodItemList';

EmptyFoodItemList.propTypes = {
	className: PropTypes.string,
	onSearchClick: PropTypes.func
};

const FoodItemList = ({
	foodItems,
	onFoodItemRemove,
	onSearchClick,
	...others
}) => {
	return (
		<div className="FoodItemList">
			{foodItems.length > 0 ? (
				<table className="FoodItemList-list">
					<tbody>
						{foodItems.map(foodItem => (
							<FoodItem
								key={'food-item-' + foodItem.id}
								onRemoveClick={onFoodItemRemove}
								{...others}
								{...foodItem}
							/>
						))}
					</tbody>
				</table>
			) : (
				<EmptyFoodItemList onSearchClick={onSearchClick} />
			)}
		</div>
	);
};

FoodItemList.displayName = 'FoodItemList';

FoodItemList.propTypes = {
	foodItems: PropTypes.array,
	onFoodItemRemove: PropTypes.func,
	onSearchClick: PropTypes.func
};

export default FoodItemList;
