import SearchBar from './SearchBar';

import { connect } from 'react-redux';
import { setSearchTerm, search } from '../../actions/search-actions';

const mapDispatchToProps = dispatch => {
	return {
		onChange: term => dispatch(setSearchTerm(term)),
		onSubmit: term => dispatch(search(term))
	};
};

const mapStateToProps = ({ search }) => ({
	value: search.term
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar);
