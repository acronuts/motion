import baseUrl from '../../helpers/constants'

export const storePosts = (posts) =>{
    return {
        type: 'STORE_POST',
        payload: posts,
    }
}

export const myPostAction = () => async (dispatch, getState) => {
    const {token} = getState().authReducer

    const config = {
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }),
        
    };
    try {
        const response = await fetch(`${baseUrl}/backend/api/social/posts/user/<int:id>`, config)
        // console.log('res', response)
        if (response.status <= 299) {
            const posts = await response.json()
            dispatch(storePosts(posts))
            return posts           

        }
    } catch (error) {
        console.log('error', error)
    }
}