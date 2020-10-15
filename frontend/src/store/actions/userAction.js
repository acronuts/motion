export const userAction = () => async (dispatch, getState) => {
    const {token} = getState().authReducer

    const config = {
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }),
        
    };
    const response = await fetch('https://joost.propulsion-learn.ch/backend/api/users/me/', config)
        const user = await response.json()
        // console.log(response)
        // console.log('user', user)
        dispatch({
            type: 'USER_DATA',
            payload: user,
        }) 
}
