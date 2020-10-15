export const authAction = (token) => {
    return {
        type: 'USER_LOGIN',
        payload: token,
    }
}

export const authUser = (user) => {
    return {
        type: 'USER_DATA',
        payload: user,
    }
}