import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myFriendsAction } from "../../../../store/actions/myFriendsAction";
import MyOwnFriends from './MyOwnFriends'


const MyProfileFriends = () => {
    const friends = useSelector((state) => state.authReducer.user.friends)

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const fetchFriends = async() => {
    //     const data = await dispatch(myFriendsAction())
    //     }
    //     fetchFriends()
    // }, [])

    return (
        <>
        {friends.map((friend) => <MyOwnFriends friend={friend} key={friend.id}/>)}
        </>
    )
}

export default MyProfileFriends