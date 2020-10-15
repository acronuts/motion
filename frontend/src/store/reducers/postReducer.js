const initialState = {
    posts: [],
}

export const postReducer = (state = initialState, action) => {
    // console.log('action', action)
    switch (action.type) {
        case 'STORE_POST':
            return {...state, posts: action.payload};
        case 'ADD_POST':
            return {...state, posts: [action.payload, ...state.posts] };
        default:
            return state
    }
}