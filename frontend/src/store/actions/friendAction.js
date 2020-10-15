import baseUrl from "../../helpers/constants";

export const storeFriends = (friends) =>{
    return {
        type: 'STORE_FRIEND',
        payload: friends,
    }
}


export const friendAction = () => async (dispatch, getState) => {
        const {token} = getState().authReducer

        const config = {
            method: 'GET',
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }),
            
        };
        try {
            const response = await fetch(`${baseUrl}/backend/api/users/`, config)
            // console.log('res', response)
            if (response.status <= 299) {
                const friends = await response.json()
                dispatch(storeFriends(friends))
                return friends           

            }
        } catch (error) {
            console.log('error', error)
        }
    }
