import {storePosts} from './postAction'
import baseUrl from '../../helpers/constants'

export const addPost = (post) =>{
    return {
        type: 'ADD_POST',
        payload: post,
    }
}


export const postContentAction = (content) => async (dispatch, getState) => {

    const {token} = getState().authReducer

    const config = {
        method: 'POST',
        headers: new Headers({
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }),
        body: JSON.stringify({content})        
    };
    try {
        const response = await fetch(`${baseUrl}/backend/api/social/posts/`, config)
        // console.log('res', response)
        if (response.status <= 299) {
            const post = await response.json()
            dispatch(addPost(post))
            return post           
        }
    } catch (error) {
        console.log('error', error)
    }
    
}