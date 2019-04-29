import React from 'react';
import PropTypes from 'prop-types';

import FoodItem from './FoodItem';

const FoodItemList = ({ foodItems, onFoodItemRemove, ...others }) => {
	return (
		<table className="FoodItemList">
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
	);
};

FoodItemList.displayName = 'FoodItemList';

FoodItemList.propTypes = {
	foodItems: PropTypes.array,
	onFoodItemRemove: PropTypes.func
};

export default FoodItemList;
