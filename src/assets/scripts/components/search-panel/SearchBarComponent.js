import SearchBar from './SearchBar';

import { connect } from 'react-redux';
import {
	setSearchTerm,
	search,
	setSearchFocus,
	setFolded
} from '../../actions/search-actions';

const mapDispatchToProps = dispatch => {
	return {
		onChange: term => dispatch(setSearchTerm(term)),
		onSubmit: term => dispatch(search(term)),
		onFocus: focus => dispatch(setSearchFocus(focus)),
		onFoldClick: () => dispatch(setFolded(true))
	};
};

const mapStateToProps = ({ search, mobile }) => ({
	value: search.term,
	isFocused: search.isFocused,
	foldable: mobile
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar);
