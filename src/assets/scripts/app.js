// app.js

import React from 'react';

import '../scss/app.scss';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './reducers/app-reducer';
import { closeSuggestions } from './actions/suggestions-actions';
import { loadFoodList } from './actions/food-item-list-actions.js';

import App from './components/app/App';

import FoodListCache from './FoodListCache';

const flc = new FoodListCache();
export const foodListCache = flc;

const store = createStore(appReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('page-content')
);

// Hack so that the focus on the search bar does not open the suggestion menu
store.dispatch(closeSuggestions());

flc.load().then(() => {
	store.dispatch(loadFoodList());
});

