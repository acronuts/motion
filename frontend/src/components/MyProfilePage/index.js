import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { MyProfilePageStyle, MyProfileContainerStyle, MyProfileInfoLeft, MyProfileInfoRight, 
//     MyProfilePic2, MyProfileName, MyProfileLocation, MyProfileAboutSection, MyProfileStats,
//     MyProfileAboutTop, MyProfileAboutBottom, About, ThingsILike, ContactDetails, StatBox, StatNumber } from './style';
// import { ClearBtn } from '../../style/Buttons'
// import me2 from '../../assets/avatars/me2.png'
// import {userAction} from '../../store/actions/userAction'
import MyProfileComponent from './MyProfileComponent';

const MyProfilePage = () => {

    // const user = useSelector(state => state.authReducer.user)

    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(userAction())
    // }, [])
    
    // console.log(user)

    return(
        <MyProfileComponent />
    )
}

export default MyProfilePage