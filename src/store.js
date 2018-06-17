// createStore is a function that the redux library provides
import {createStore} from 'redux';

import myReducer from './reducer';

// whichever file imports this file (store.js) will get the value that is exported by default

// let store = createStore(myReducer)
// export default store
export default createStore(reducer);