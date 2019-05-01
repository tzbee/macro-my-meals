import TotalDetails from './TotalDetails';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
	return {};
};

const mapStateToProps = ({ total }) => ({ total });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TotalDetails);
