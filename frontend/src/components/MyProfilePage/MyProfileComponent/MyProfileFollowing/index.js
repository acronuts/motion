import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myFolloweesAction } from '../../../../store/actions/myFolloweesAction'
import MyFollowees from './MyFollowees'
import {FriendCompStyle} from './style'



const MyProfileFollowing = () => {
    const followees = useSelector((state) => state.friendReducer.followees)

    const dispatch = useDispatch();

    useEffect(()=> {
        const fetchFollowees = async () =>{
        const followees = await dispatch(myFolloweesAction())
        console.log('followees', followees)   
        }
        fetchFollowees() 
    }, [])
    console.log('followees', followees)
    return (
        <FriendCompStyle>
        {followees.map((followee) => <MyFollowees followee={followee} key={followee.id}/>)}
        </ FriendCompStyle>
    )
}

export default MyProfileFollowing