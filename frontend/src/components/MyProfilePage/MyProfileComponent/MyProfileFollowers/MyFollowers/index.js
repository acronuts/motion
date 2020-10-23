import React from 'react';
import {MyFriendsStyle, MyFriendImage, MyFriendName, MyFriendLocation, MyFriendBtns, MyFriendAbout, MyFriendLikes } from './style';
import { ClearBtn } from '../../../../../style/Buttons'
import {LikeBoxItems} from '../../../../../style/index'
import avatarIcon from '../../../../../assets/svgs/avatar.svg';


const MyFollowers = ({follower}) => {
    console.log('follower', follower)
    return (
        
        <MyFriendsStyle>
            {follower.avatar ?  <MyFriendImage src={follower.avatar} alt='profile_pic' /> :
            <MyFriendImage src={avatarIcon} alt='profile_pic' /> }
            <MyFriendName>{follower.first_name} {follower.last_name}</MyFriendName>
            <MyFriendLocation>{follower.location} </MyFriendLocation>
            <MyFriendBtns>
                <ClearBtn>Follow</ClearBtn>
                <ClearBtn>Add Friend</ClearBtn>
            </MyFriendBtns>
            <MyFriendAbout>{follower.about_me}</MyFriendAbout>
            <MyFriendLikes>
                {follower['fk_interest_user'] ?
                follower.fk_interest_user.map(interest => {
                    return(<LikeBoxItems>{interest.interest_name}</LikeBoxItems>)
                }) : null }
            </MyFriendLikes>
        </MyFriendsStyle>
        
    )
}

export default MyFollowers;