import React from 'react';

// Redux containers
import SearchPanel from '../search-panel/SearchPanel';
import ListPanel from '../list-panel/ListPanel';
import TotalPanel from '../total-panel/TotalPanel';

const App = () => {
	return (
		<div className="App">
			<div className="App-searchPanel">
				<SearchPanel />
			</div>
			<div className="App-listPanel">
				<ListPanel />
			</div>
			<div className="App-totalPanel">
				<TotalPanel />
			</div>
		</div>
	);
};

export default App;
