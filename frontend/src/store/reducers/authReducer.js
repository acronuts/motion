const initialState = {
    token: null,
    user: [],
}

export const authReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case 'USER_LOGIN':
            const token = action.payload;
            return {...state, token};
        case 'USER_DATA':
            const user = action.payload;
            return {...state, user:{...user}}
        default:
            return state
    }
}