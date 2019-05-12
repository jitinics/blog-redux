import HttRequest from './HttpRequest'

class UserProvider {
  signIn(username, password) {
    return HttRequest.post('/user/signin', {
      email: username,
      password
    })
  }
}

export default UserProvider