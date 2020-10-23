import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postLikedAction } from '../../../../store/actions/postLikedAction'
import MyOwnPosts from '../MyProfileMyPosts/MyOwnPosts'



const MyProfileLikes = () => {
    const posts = useSelector((state) => state.postReducer.posts)

    const dispatch = useDispatch();

    useEffect(()=> {
        const fetchPosts = async () =>{
        const data = await dispatch(postLikedAction())
        // console.log('data', data)   
        }
        fetchPosts() 
    }, [])

    return (
        <>
            {posts.map((post) => <MyOwnPosts post={post} key={post.id}/>)}
        </>
    )
}

export default MyProfileLikes