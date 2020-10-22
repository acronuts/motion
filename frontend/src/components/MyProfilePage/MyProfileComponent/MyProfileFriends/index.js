import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myFriendsAction } from "../../../../store/actions/myFriendsAction";
import MyFriends from '../../../Friends'


const MyProfileFriends = () => {
    const friends = useSelector((state) => state.friendReducer.friends)

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchFriends = async() => {
        const data = await dispatch(myFriendsAction())
        }
        fetchFriends()
    }, [])

    return (
        <div>{friends.map((friend) => <MyFriends friend={friend} key={friend.id}/>)}</div>
    )
}

export default MyProfileFriends