// react starts here because through document.getelementById with line -5 (5 lines from bottom)
// this is a method which specifies where we're placing the react component in the DOM
// everything in the source folder is being transpiled and put into the budle.js file, wich gets sent to the browser
// importing code from other files
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
	// provider intiates communication between ract component and the redux store
	// the store is being passed as props
	// provider is letting store = the redux store file (see line 9)
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
