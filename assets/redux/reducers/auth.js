const initialState = {
    token:null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TOKEN':
        return { 
            token:action.payload.token,
        }
      default:
        return state
    }
}
