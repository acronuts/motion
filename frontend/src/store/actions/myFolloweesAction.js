import baseUrl from '../../helpers/constants'

export const storeFollowees = (followees) =>{
    return {
        type: 'STORE_FOLLOWEES',
        payload: followees,
    }
}


export const myFolloweesAction = () => async (dispatch, getState) => {
        const {token} = getState().authReducer

        const config = {
            method: 'GET',
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }),
            
        };
        try {
            const response = await fetch(`${baseUrl}/backend/api/social/followers/following/`, config)
            // console.log('res', response)
            if (response.status <= 299) {
                const followees = await response.json()
                dispatch(storeFollowees(followees))
                return followees           

            }
        } catch (error) {
            console.log('error', error)
        }
    }
