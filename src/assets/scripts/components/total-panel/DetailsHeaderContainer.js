// DetailsHeaderContainer.js;

import DetailsHeader from './DetailsHeader';

import { connect } from 'react-redux';

import { setTab } from '../../actions/tab-actions';

const mapDispatchToProps = dispatch => {
	return {
		onTabClick: tabID => dispatch(setTab(tabID))
	};
};

const mapStateToProps = ({ tab }) => ({
	selectedTabID: tab.tabID
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DetailsHeader);
