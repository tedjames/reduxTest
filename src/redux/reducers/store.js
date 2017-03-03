import { createStore, applyMiddleware } from 'redux'

import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { routerReducer } from 'react-router-redux'
import reducers from './index'
import ReduxThunk from 'redux-thunk'

const defaultState = {
  routing: routerReducer
};

// Initialize Store using Middleware
const store = createStore(reducers, defaultState, applyMiddleware(ReduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// Synchronize React-Router history with Redux
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
