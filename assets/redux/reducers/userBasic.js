const initialState = {
    user:{}
    
};

export const userBasicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                user:action.payload.user
            };
        default:
            return state;
    }
};
