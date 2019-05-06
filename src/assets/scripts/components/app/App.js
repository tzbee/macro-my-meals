import React from 'react';

// Redux containers
import SearchPanel from '../search-panel/SearchPanel';
import ListPanel from '../list-panel/ListPanel';
import TotalPanel from '../total-panel/TotalPanel';

const App = () => {
	return (
		<div className="App">
			<div className="App-bannerPanel App-panel">
				<div className="banner">
					<div className="banner-title-wrapper">
						<span className="banner-logo-wrapper">LOGO</span>
						<span className="banner-title">Nutricount</span>
					</div>
				</div>
			</div>
			<div className="App-searchPanel App-panel">
				<SearchPanel />
			</div>
			<div className="App-listPanel App-panel">
				<ListPanel />
			</div>
			<div className="App-totalPanel App-panel">
				<TotalPanel />
			</div>
		</div>
	);
};

export default App;
