import React from 'react';
import { MyPostStyle, Menu, MyPostHeader, MyPostContent, MyPostFooter, 
    MyPostLike, MyPostShare, MyPostNumOfLikes, UserPostImg, UserPostInfo, TimeStamp } from './style'
import myself from '../../../assets/avatars/me2.png'
import menu from '../../../assets/svgs/menu.svg'
import heart from '../../../assets/svgs/heart.svg'
import share from '../../../assets/svgs/share.svg'
import { timeSince } from './time'
import avatarIcon from '../../../assets/svgs/avatar.svg';


const MyPost = ({post}) => {

    const timeStamp = new Date(post.post_date)

    return (
        <MyPostStyle>
            <MyPostHeader>
                <UserPostImg src={myself} alt='me' />
                <UserPostInfo>
                    <p>{post.author.first_name} {post.author.last_name}</p>
                    <TimeStamp>{timeSince(timeStamp)}</TimeStamp>
                </UserPostInfo>
                <Menu><img src={menu} alt='menu' /></Menu>
            </MyPostHeader>
            <MyPostContent>{post.text_content}</MyPostContent>
            <MyPostFooter>
                <MyPostLike><img src={heart} alt='heart' />Like</MyPostLike>
                <MyPostShare><img src={share} alt='share' />Share</MyPostShare>
                <MyPostNumOfLikes>{post.likes_counter} likes</MyPostNumOfLikes>
            </MyPostFooter>
        </MyPostStyle>
    )
};

export default MyPost;