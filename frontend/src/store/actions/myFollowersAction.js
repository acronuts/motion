import baseUrl from '../../helpers/constants'

export const storeFollowers = (followers) =>{
    return {
        type: 'STORE_FOLLOWERS',
        payload: followers,
    }
}


export const myFollowersAction = () => async (dispatch, getState) => {
        const {token} = getState().authReducer

        const config = {
            method: 'GET',
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }),
            
        };
        try {
            const response = await fetch(`${baseUrl}/backend/api/social/followers/followers/`, config)
            // console.log('res', response)
            if (response.status <= 299) {
                const followers = await response.json()
                dispatch(storeFollowers(followers))
                return followers           

            }
        } catch (error) {
            console.log('error', error)
        }
    }
