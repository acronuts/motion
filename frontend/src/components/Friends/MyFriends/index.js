import React, { useState } from 'react';
import {MyFriendsStyle, MyFriendImage, MyFriendName, MyFriendLocation, MyFriendBtns, MyFriendAbout, MyFriendLikes } from './style';
import { ClearBtn } from '../../../style/Buttons'
import {LikeBoxItems} from '../../../style/index'
import avatarIcon from '../../../assets/svgs/avatar.svg';


const MyFriends = ({friend}) => {
 
    return (
        
        <MyFriendsStyle>
            {friend.first_name ? <>
            {friend.avatar ?  <MyFriendImage src={friend.avatar} alt='profile_pic' /> :
            <MyFriendImage src={avatarIcon} alt='profile_pic' /> }
            <MyFriendName>{friend.first_name} {friend.last_name}</MyFriendName>
            {friend.username}
            <MyFriendLocation>{friend.location} </MyFriendLocation>
            <MyFriendBtns>
                <ClearBtn>Follow</ClearBtn>
                <ClearBtn>Add Friend</ClearBtn>
            </MyFriendBtns>
            <MyFriendAbout>Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian</MyFriendAbout>
            <MyFriendLikes>{friend.things_user_likes.map((item) => <LikeBoxItems>{item}</LikeBoxItems>)}</MyFriendLikes>
            <div>{friend.amount_of_posts} Posts {friend.amount_of_likes} Likes</div> </>
            : "Only friends with first names here"}
        </MyFriendsStyle>
    )
}

export default MyFriends;

// {if (avatar) {{src={friend.avatar}}} else src={avatar}}