import { combineReducers } from 'redux'
import AdminReducer from './adminReducer'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  admin: AdminReducer,
  routing: routerReducer
});

export default reducers;
