import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MyProfilePageStyle, MyProfileContainerStyle, MyProfileInfoLeft, MyProfileInfoRight, 
    MyProfilePic2, MyProfileName, MyProfileLocation, MyProfileAboutSection, MyProfileStats,
    MyProfileAboutTop, MyProfileAboutBottom, About, ThingsILike, ContactDetails, StatBox, StatNumber, LikeBoxItems, LikeBoxDiv } from './style';
import { ClearBtn } from '../../../style/Buttons'
import me2 from '../../../assets/avatars/me2.png'
import {userAction} from '../../../store/actions/userAction'

const MyProfileComponent = () => {

    const user = useSelector(state => state.authReducer.user)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(userAction())
    }, [])
    
    // console.log(user)

    return(
        <MyProfilePageStyle>
            {user ? 
                <MyProfileContainerStyle>
                    <MyProfileInfoLeft>
                        <MyProfilePic2 src={me2} alt='me' />
                        <MyProfileName>{user.first_name} {user.last_name}</MyProfileName>
                        <MyProfileLocation>{user.location}</MyProfileLocation>
                        <div>{user.username}</div>
                        <div>{user.job}</div>
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
                            <StatBox>
                                <StatNumber>{user.amount_of_posts}</StatNumber> 
                                <div>Posts</div>
                            </StatBox>
                            <StatBox>
                                <StatNumber>{user.amount_of_likes}</StatNumber>
                                <div>Likes</div>
                            </StatBox>
                            <StatBox>
                                <StatNumber>{user.amount_of_friends}</StatNumber>
                                <div>Friends</div>
                            </StatBox>
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
            : 'loading'}
        </MyProfilePageStyle>
    )
}

export default MyProfileComponent