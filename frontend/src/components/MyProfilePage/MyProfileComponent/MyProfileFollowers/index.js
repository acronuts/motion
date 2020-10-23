import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myFollowersAction } from '../../../../store/actions/myFollowersAction'
import MyFollowers from './MyFollowers'
import { FriendCompStyle } from './style'



const MyProfileFollowers = () => {
    const followers = useSelector((state) => state.friendReducer.followers)

    const dispatch = useDispatch();

    useEffect(()=> {
        const fetchFollowers = async () =>{
        const followers = await dispatch(myFollowersAction())
        // console.log('followers', followers)   
        }
        fetchFollowers() 
    }, [])
    // console.log('followers', followers)
    return (
        <FriendCompStyle>
        {followers.map((follower) => <MyFollowers follower={follower} key={follower.id}/>)}
        </ FriendCompStyle>
    )
}

export default MyProfileFollowers