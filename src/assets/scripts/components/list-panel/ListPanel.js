import React from 'react';
import PropTypes from 'prop-types';

import FoodItemListContainer from '../food-item-list/FoodItemListContainer';
import { setFolded } from '../../actions/search-actions';

class ListPanel extends React.Component {
	constructor(props) {
		super(props);
		this.listContentRef = React.createRef();
	}

	componentDidUpdate() {
		const { scrollValue } = this.props;
		this._scrollListTo(scrollValue);
	}

	_scrollListTo(value) {
		this.listContentRef.current.scrollTo(
			value,
			this.listContentRef.current.scrollHeight
		);
	}

	render() {
		const {
			className = '',
			searchBtnActive = false,
			onSearchClick
		} = this.props;

		const handleSearchClick = () => {
			onSearchClick();
		};

		const handleScroll = e => {
			// debugger;
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
				<div
					className="ListPanel-content"
					ref={this.listContentRef}
					onScroll={handleScroll}
				>
					<FoodItemListContainer />
				</div>
			</div>
		);
	}
}

ListPanel.displayName = 'ListPanel';

ListPanel.propTypes = {
	className: PropTypes.string,
	searchBtnActive: PropTypes.bool,
	onSearchClick: PropTypes.func,
	scrollValue: PropTypes.number
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
