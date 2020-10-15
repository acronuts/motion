import React from 'react';
import { MyPostStyle, Menu, MyPostHeader, MyPostContent, MyPostFooter, 
    MyPostLike, MyPostShare, MyPostNumOfLikes, UserPostImg, UserPostInfo, TimeStamp } from './style'
import menu from '../../../assets/svgs/menu.svg'
import heart from '../../../assets/svgs/heart.svg'
import share from '../../../assets/svgs/share.svg'
import { timeSince } from './time'
import avatarIcon from '../../../assets/svgs/avatar.svg';


const MyPost = ({post}) => {


    const timeStamp = new Date(post.created)

    return (
        <MyPostStyle>
            <MyPostHeader>
                <UserPostImg src={avatarIcon} alt='me' />
                <UserPostInfo>
                    <p>{post.user.first_name} {post.user.last_name}</p>
                    <TimeStamp>{timeSince(timeStamp)}</TimeStamp>
                </UserPostInfo>
                <Menu><img src={menu} alt='menu' /></Menu>
            </MyPostHeader>
            <MyPostContent>{post.content}</MyPostContent>
            <MyPostFooter>
                <MyPostLike><img src={heart} alt='heart' />Like</MyPostLike>
                <MyPostShare><img src={share} alt='share' />Share</MyPostShare>
                <MyPostNumOfLikes>{post.amount_of_likes} likes</MyPostNumOfLikes>
            </MyPostFooter>
        </MyPostStyle>
    )
};

export default MyPost;