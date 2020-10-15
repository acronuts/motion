import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { friendAction } from '../../store/actions/friendAction';
import MyFriends from './MyFriends';
import {FriendCompStyle} from './style'

const Friends = () => {

    const friends = useSelector((state) => state.friendReducer.friends)
    // console.log('friends', friends)
    const dispatch = useDispatch();

    useEffect(()=> {
        const fetchFriends = async () =>{
        const data = await dispatch(friendAction())
        // console.log('data', data)
    
        }
        fetchFriends() 
    }, [])
    
    return (
        <FriendCompStyle>
        {friends.map((friend) => <MyFriends friend={friend} key={friend.id}/>)} 
        </FriendCompStyle>
    )
}

export default Friends