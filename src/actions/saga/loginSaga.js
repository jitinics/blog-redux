import { takeEvery, put, call, fork } from 'redux-saga/effects'
import UserProvider from '../../resources/UserProvider'
const userProvider = new UserProvider()
function *loginRequest() {
  // Watcher
      console.log('ddd')   
      yield takeEvery('LOGIN', login)      
}
function* login(action) {
  try {
    yield put({type: "INCREASE_LOADING"});
    const result = yield call(userProvider.signIn, action.payload.email, action.payload.password)
    yield put({type: "LOGIN_SUCCESS", payload: result.data});
  } catch (e) {
    console.log(e)
  } finally {
    yield put({type: "DECREASE_LOADING"});
  }
}
export default loginRequest