import Total from './Total';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
	return {};
};

const mapStateToProps = ({ total }) => ({ count: total.calories });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Total);
