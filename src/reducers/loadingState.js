export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_LOADING':
      return state+1
    case 'DECREASE_LOADING':
      return state-1
    default:
      return state
  }
}