const initialState = {
    username:null,
    avatar_url:null,
    createdAt:null
}

export const userBasicReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { 
            username:action.payload.username,
            avatar_url:action.payload.avatar_url,
            createdAt:action.payload.createdAt,
        }
      default:
        return state
    }
}
