const initialState = {
    friends: [],
}

export const friendReducer = (state = initialState, action) => {
    // console.log('action', action)
    switch (action.type) {
        case 'STORE_FRIEND':
            return {...state, friends: action.payload};
        default:
            return state
    }
}