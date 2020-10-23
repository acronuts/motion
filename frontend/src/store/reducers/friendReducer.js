const initialState = {
    friends: [],
    followees: [],
    followers: [],
}

export const friendReducer = (state = initialState, action) => {
    // console.log('action', action)
    switch (action.type) {
        case 'STORE_FRIEND':
            return {...state, friends: action.payload};
        case 'STORE_FOLLOWEES':
            return {...state, followees: action.payload};
        case 'STORE_FOLLOWERS':
            return {...state, followers: action.payload};
        default:
            return state
    }
}