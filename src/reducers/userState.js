export default (state = {}, action) => {
  console.log("dfdfdfdfd")
    switch (action.type) {
     case 'LOGIN_SUCCESS':
      return action.payload
     default:
      return state
    }
   }