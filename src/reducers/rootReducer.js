import { combineReducers } from 'redux';
import userState from './userState';
import loadingState from './loadingState';
export default combineReducers({
  userState,
  isLoading: loadingState
});