const initialState = {
  data:{}
}
  const profile = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case 'SET_USER_DATA':
        return {
          ...state, data: payload
        }
      default:
        return state
    }
  }
  
  export default profile
  