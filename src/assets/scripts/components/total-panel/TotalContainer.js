import TotalDetailsTab from './TotalDetailsTab';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
	return {};
};

const mapStateToProps = ({ total, tab, selectedItem }) => ({
	totalDetails: total,
	selectedTabID: tab.tabID,
	itemDetails: itemToProps(selectedItem.item)
});

const itemToProps = ({ nutrients = [] }) => {
	return nutrients.reduce((props, prop) => {
		props[prop.id] = {
			id: prop.id,
			name: prop.name,
			value: prop.valueMap['g'].value * 100,
			unit: prop.unit
		};
		return props;
	}, {});
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TotalDetailsTab);
