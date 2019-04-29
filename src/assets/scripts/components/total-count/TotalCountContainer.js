import { connect } from 'react-redux';
import TotalCount from './TotalCount';

const mapDispatchToProps = dispatch => {
	return {};
};

const mapStateToProps = ({ total }) => ({
	count: total.calories
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TotalCount);
