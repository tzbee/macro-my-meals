import React from 'react';
import PropTypes from 'prop-types';

import FoodItemListContainer from '../food-item-list/FoodItemListContainer';
import { setFolded } from '../../actions/search-actions';

const ListPanel = ({
	className = '',
	searchBtnActive = false,
	onSearchClick
}) => {
	const handleSearchClick = () => {
		onSearchClick();
	};
	return (
		<div className={`ListPanel ${className}`}>
			<div className="ListPanel-header">
				{searchBtnActive && (
					<button
						className="ListPanel-search fa fa-search"
						onClick={handleSearchClick}
					/>
				)}
				Your Daily Meal Plan
			</div>
			<div className="ListPanel-content">
				<FoodItemListContainer />
			</div>
		</div>
	);
};

ListPanel.displayName = 'ListPanel';

ListPanel.propTypes = {
	className: PropTypes.string,
	searchBtnActive: PropTypes.bool,
	onSearchClick: PropTypes.func
};

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
	return { onSearchClick: () => dispatch(setFolded(false)) };
};

const mapStateToProps = ({ mobile }) => ({
	searchBtnActive: mobile
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListPanel);
