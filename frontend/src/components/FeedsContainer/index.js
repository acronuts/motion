import React, { useEffect } from 'react'
import MyPost from './MyPost';
import OnYourMind from './OnYourMind';
import { FeedSectionStyle } from './style'
import { postAction } from '../../store/actions/postAction'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../SearchBar'



const FeedsContainer = () => {
    const posts = useSelector((state) => state.postReducer.posts)

    const dispatch = useDispatch();

    useEffect(()=> {
        const fetchPosts = async () =>{
        const data = await dispatch(postAction())
        // console.log(data)   
        }
        fetchPosts() 
    }, [])

    return (
        <>
            <SearchBar />
            <FeedSectionStyle>
                <OnYourMind />
                {posts.map((post) => <MyPost post={post} key={post.id}/>)}
            </FeedSectionStyle>
        </>
    )
}

export default FeedsContainer;