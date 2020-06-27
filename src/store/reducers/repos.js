const initialState = {
    data: []
  }
    const repos = (state = initialState, action) => {
      const { type, payload } = action
      switch (type) {
        case 'SET_USER_REPOS':
          return {
            ...state, data: payload
          }
        default:
          return state
      }
    }
    
    export default repos
    