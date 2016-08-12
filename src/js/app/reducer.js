import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as todoManagerReducer } from '../todo-manager';

export default combineReducers({
  ...todoManagerReducer,
  routing: routerReducer
});
