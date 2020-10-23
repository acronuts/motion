import React from 'react';
import {MyFriendsStyle, MyFriendImage, MyFriendName, MyFriendLocation, MyFriendBtns, MyFriendAbout, MyFriendLikes } from './style';
import { ClearBtn } from '../../../../../style/Buttons'
import {LikeBoxItems} from '../../../../../style/index'
import avatarIcon from '../../../../../assets/svgs/avatar.svg';


const MyFollowees = ({followee}) => {
    // console.log('followee', followee)
    return (
        
        <MyFriendsStyle>
            {followee.avatar ?  <MyFriendImage src={followee.avatar} alt='profile_pic' /> :
            <MyFriendImage src={avatarIcon} alt='profile_pic' /> }
            <MyFriendName>{followee.first_name} {followee.last_name}</MyFriendName>
            <MyFriendLocation>{followee.location} </MyFriendLocation>
            <MyFriendBtns>
                <ClearBtn>Follow</ClearBtn>
                <ClearBtn>Add Friend</ClearBtn>
            </MyFriendBtns>
            <MyFriendAbout>{followee.about_me}</MyFriendAbout>
            <MyFriendLikes>
                {followee['fk_interest_user'] ?
                followee.fk_interest_user.map(interest => {
                    return(<LikeBoxItems>{interest.interest_name}</LikeBoxItems>)
                }) : null }
            </MyFriendLikes>
        </MyFriendsStyle>
        
    )
}

export default MyFollowees;
