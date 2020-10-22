import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myPostAction } from '../../../../store/actions/myPostAction'
import MyPost from '../../../FeedsContainer/'



const MyProfileMyPost = () => {
    const posts = useSelector((state) => state.postReducer.posts)

    const dispatch = useDispatch();

    useEffect(()=> {
        const fetchPosts = async () =>{
        const data = await dispatch(myPostAction())
        console.log('data', data)   
        }
        fetchPosts() 
    }, [])

    return (
        <>
            {posts.map((post) => <MyPost post={post} key={post.id}/>)}
        </>
    )
}

export default MyProfileMyPost