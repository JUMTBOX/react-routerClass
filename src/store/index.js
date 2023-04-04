import todo from './modules/todo';
import weightReducer from './modules/weight';
import { combineReducers } from 'redux';

export default combineReducers({
  todo,
  weightReducer,
});
