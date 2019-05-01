import SearchBar from './SearchBar';

import { connect } from 'react-redux';
import {
	setSearchTerm,
	search,
	setSearchFocus
} from '../../actions/search-actions';

const mapDispatchToProps = dispatch => {
	return {
		onChange: term => dispatch(setSearchTerm(term)),
		onSubmit: term => dispatch(search(term)),
		onFocus: focus => dispatch(setSearchFocus(focus))
	};
};

const mapStateToProps = ({ search }) => ({
	value: search.term,
	isFocused: search.isFocused
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar);
