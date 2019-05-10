// DetailsHeaderContainer.js;

import DetailsHeader from './DetailsHeader';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
	return {
		dispatch
	};
};

const mapStateToProps = ({ tab }) => ({
	selectedTabID: tab.tabID
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DetailsHeader);
