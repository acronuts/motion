import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MyProfilePageStyle, MyProfileContainerStyle, MyProfileInfoLeft, MyProfileInfoRight, NavLink,
    MyProfilePic2, MyProfileName, MyProfileLocation, MyProfileAboutSection, MyProfileStats,
    MyProfileAboutTop, MyProfileAboutBottom, About, ThingsILike, ContactDetails, StatBox, StatNumber, LikeBoxItems, LikeBoxDiv } from './style';
import { ClearBtn } from '../../../style/Buttons'
import avatarIcon from '../../../assets/svgs/avatar.svg'
import {userAction} from '../../../store/actions/userAction'
import { Link } from 'react-router-dom';

const MyProfileComponent = () => {

    const user = useSelector(state => state.authReducer.user)
    // console.log(user)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(userAction())
    }, [])
    
    // console.log('friends', user.username)

    return(
        <>
        {user ? 
        <MyProfilePageStyle background={user.banner}>
            <MyProfileContainerStyle>
                <MyProfileInfoLeft>
                    {user.avatar ? <MyProfilePic2 src={user.avatar} alt='profile_pic' /> : <MyProfilePic2 src={avatarIcon} alt='profile_pic' /> }
                    <MyProfileName>{user.first_name} {user.last_name}</MyProfileName>
                    <MyProfileLocation>{user.location}</MyProfileLocation>
                    <ClearBtn>Edit Profile</ClearBtn>
                </MyProfileInfoLeft>
                <MyProfileInfoRight>
                    <MyProfileAboutSection>
                        <MyProfileAboutTop>
                            <About><p>About</p><br/>
                            <p>{user.about_me}</p>
                            </About>
                            <ThingsILike>
                                <p>Things I like</p><br/>
                                <LikeBoxDiv>
                                    {user['fk_interest_user'] ?
                                    user.fk_interest_user.map(interest => {
                                        return(<LikeBoxItems>{interest.interest_name}</LikeBoxItems>)
                                    }) : null }
                                </LikeBoxDiv>
                            </ThingsILike>
                        </MyProfileAboutTop>
                        <MyProfileAboutBottom>
                            <ContactDetails>
                                <span>Email</span>
                                <span>{user.email}</span>
                            </ContactDetails>
                            <ContactDetails>
                                <span>Phone</span>
                                <span>{user.phone_num}</span>
                            </ContactDetails>
                        </MyProfileAboutBottom>
                    </MyProfileAboutSection>
                    <MyProfileStats>
                        <NavLink to= '/profile/myposts'><StatBox>
                            <StatNumber>{user.amount_of_posts}</StatNumber> 
                            <span>Posts</span>
                        </StatBox></NavLink>
                        <NavLink to='/profile/mylikes'><StatBox>
                            <StatNumber>{user.amount_of_likes}</StatNumber>
                            <span>Likes</span>
                        </StatBox></NavLink>
                        <NavLink to= '/profile/myfriends'><StatBox>
                            <StatNumber>{user.amount_of_friends}</StatNumber>
                            <span>Friends</span>
                        </StatBox></NavLink>
                        <NavLink to='/profile/followers'><StatBox>
                            <StatNumber>{user.amount_of_followers}</StatNumber>
                            <span>Followers</span>
                        </StatBox></NavLink>
                        <NavLink to='/profile/following'><StatBox>
                            <StatNumber>{user.amount_of_following}</StatNumber>
                            <span>Following</span>
                        </StatBox></NavLink>
                    </MyProfileStats>
                </MyProfileInfoRight>
            </MyProfileContainerStyle>
        </MyProfilePageStyle>
        : 'loading'} </>
    )
}

export default MyProfileComponent

