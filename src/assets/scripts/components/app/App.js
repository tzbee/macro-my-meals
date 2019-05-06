import React from 'react';
import PropTypes from 'prop-types';

// Redux containers
import SearchPanel from '../search-panel/SearchPanel';
import ListPanel from '../list-panel/ListPanel';
import TotalPanel from '../total-panel/TotalPanel';

import { connect } from 'react-redux';

const App = ({ foldedSearch, mobile }) => {
	return (
		<div
			className={`App ${foldedSearch &&
				mobile &&
				'App-searchPanel--folded'}`}
		>
			<div className="App-bannerPanel App-panel">
				<div className="banner">
					<div className="banner-title-wrapper">
						<span className="banner-logo-wrapper">LOGO</span>
						<span className="banner-title">Nutricount</span>
					</div>
				</div>
			</div>
			<div className={`App-searchPanel App-panel`}>
				<SearchPanel />
			</div>
			<div className="App-listPanel App-panel">
				<ListPanel />
			</div>
			<div className="App-totalPanel App-panel">
				<TotalPanel />
			</div>
		</div>
	);
};

App.propTypes = {
	foldedSearch: PropTypes.bool
};

const mapDispatchToProps = dispatch => {
	return {
		dispatch
	};
};

const mapStateToProps = ({ search, mobile }) => ({
	foldedSearch: search.folded,
	mobile
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
