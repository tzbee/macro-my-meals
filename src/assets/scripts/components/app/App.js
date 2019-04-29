import React from 'react';

// Redux containers
import SearchPanel from '../search-panel/SearchPanel';
import FoodItemListContainer from '../food-item-list/FoodItemListContainer';
import TotalCountContainer from '../total-count/TotalCountContainer';

const App = () => {
	return (
		<div className="App">
			<div className="App-searchPanel">
				<SearchPanel />
			</div>
			<div className="App-listPanel">
				<FoodItemListContainer />
				<TotalCountContainer />
			</div>
		</div>
	);
};

export default App;
