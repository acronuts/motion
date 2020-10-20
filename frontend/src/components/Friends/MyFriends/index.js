import React, { useState } from 'react';
import {MyFriendsStyle, MyFriendImage, MyFriendName, MyFriendLocation, MyFriendBtns, MyFriendAbout, MyFriendLikes } from './style';
import { ClearBtn } from '../../../style/Buttons'
import {LikeBoxItems} from '../../../style/index'
import avatarIcon from '../../../assets/svgs/avatar.svg';


const MyFriends = ({friend}) => {
    console.log('friend', friend)
    return (
        
        <MyFriendsStyle>
             <>
            {friend.avatar ?  <MyFriendImage src={friend.avatar} alt='profile_pic' /> :
            <MyFriendImage src={avatarIcon} alt='profile_pic' /> }
            <MyFriendName>{friend.first_name} {friend.last_name}</MyFriendName>
            <MyFriendLocation>{friend.location} </MyFriendLocation>
            <MyFriendBtns>
                <ClearBtn>Follow</ClearBtn>
                <ClearBtn>Add Friend</ClearBtn>
            </MyFriendBtns>
            <MyFriendAbout>{friend.about_me}</MyFriendAbout>
            <MyFriendLikes>
                {friend['fk_interest_user'] ?
                friend.fk_interest_user.map(interest => {
                    return(<LikeBoxItems>{interest.interest_name}</LikeBoxItems>)
                }) : null }
            </MyFriendLikes>
             </>
        </MyFriendsStyle>
    )
}

export default MyFriends;

// {if (avatar) {{src={friend.avatar}}} else src={avatar}}