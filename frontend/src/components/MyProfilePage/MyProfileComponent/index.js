import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MyProfilePageStyle, MyProfileContainerStyle, MyProfileInfoLeft, MyProfileInfoRight, 
    MyProfilePic2, MyProfileName, MyProfileLocation, MyProfileAboutSection, MyProfileStats,
    MyProfileAboutTop, MyProfileAboutBottom, About, ThingsILike, ContactDetails, StatBox, StatNumber, LikeBoxItems, LikeBoxDiv } from './style';
import { ClearBtn } from '../../../style/Buttons'
import avatarIcon from '../../../assets/svgs/avatar.svg'
import {userAction} from '../../../store/actions/userAction'
import { Link } from 'react-router-dom';

const MyProfileComponent = () => {

    const user = useSelector(state => state.authReducer.user)
    console.log(user)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(userAction())
    }, [])
    
    console.log('friend', user.friends)

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
                                <div>Email</div>
                                <div>{user.email}</div>
                            </ContactDetails>
                            <ContactDetails>
                                <div>Phone</div>
                                <div>{user.phone_num}</div>
                            </ContactDetails>
                        </MyProfileAboutBottom>
                    </MyProfileAboutSection>
                    <MyProfileStats>
                        <Link to= '/profile/myposts'><StatBox>
                            <StatNumber>{user.amount_of_posts}</StatNumber> 
                            <div>Posts</div>
                        </StatBox></Link>
                        <StatBox>
                            <StatNumber>{user.amount_of_likes}</StatNumber>
                            <div>Likes</div>
                        </StatBox>
                        <Link to= '/profile/myfriends'><StatBox>
                            <StatNumber>{user.amount_of_friends}</StatNumber>
                            <div>Friends</div>
                        </StatBox></Link>
                        <StatBox>
                            <StatNumber>{user.amount_of_followers}</StatNumber>
                            <div>Followers</div>
                        </StatBox>
                        <StatBox>
                            <StatNumber>{user.amount_of_following}</StatNumber>
                            <div>Following</div>
                        </StatBox>
                    </MyProfileStats>
                </MyProfileInfoRight>
            </MyProfileContainerStyle>
        </MyProfilePageStyle>
        : 'loading'} </>
    )
}

export default MyProfileComponent