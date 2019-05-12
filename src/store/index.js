import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loginSaga from '../actions/saga/loginSaga';
import rootReducer from '../reducers/rootReducer';
export default function configureStore(initialState={}) {
  const saga = createSagaMiddleware()
  const store = createStore(
   rootReducer,
   initialState,
   applyMiddleware(saga)
 )
 saga.run(loginSaga)
 return store
}