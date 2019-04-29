import SearchResults from './SearchResults';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
	return {};
};

const mapStateToProps = ({ searchResults }) => ({
	results: searchResults.list
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResults);
