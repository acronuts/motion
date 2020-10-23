import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../../store/actions/userAction'
import { Link } from 'react-router-dom'
import { NavBarStyle, BellIcon, MotionHome, Posts, FindFriends, Profile, ProfilePic, Menu, NavLink } from './style';
import logo from '../../assets/images/logo.png';
import post_logo from '../../assets/images/posts_logo.png';
import friendsIcon from '../../assets/svgs/icon-friends.svg';
import bell from '../../assets/svgs/notification_bell.svg';
import avatarIcon from '../../assets/svgs/avatar.svg'
// import myself from '../../assets/avatars/me2.png';
// import menu from '../../assets/svgs/menu.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import baseUrl from "../../helpers/constants";


const NavBar = () => {

    const user = useSelector((state) => state.authReducer.user)
    // console.log('user', user)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(userAction())
    }, [])


    const logout = () =>{
        window.localStorage.clear();
        window.location.href = `${baseUrl}`
    }

    return (
        <NavBarStyle>
            <MotionHome><img src={logo} alt='logo' />Motion</MotionHome>
            <NavLink to='/'><Posts><img src={post_logo} alt='plogo' />Posts</Posts></NavLink>
            <NavLink to='/friends'><FindFriends><img src={friendsIcon} alt='friends' />Find Friends</FindFriends></NavLink>
            <BellIcon><img src={bell} alt='bell' /></BellIcon>
            <Link to='/profile'><Profile>
            {user.avatar ? <ProfilePic src={user.avatar} alt='profile' title="Profile"/> : <ProfilePic src={avatarIcon} alt='profile' title="Profile"/> }
            </Profile></Link>
            <Menu onClick={logout} title="Logout" ><FontAwesomeIcon icon={faSignOutAlt} /></Menu>
        </NavBarStyle>
    )
};

export default NavBar

//<img src={menu} alt='menu' />
// {user.avatar ? <ProfilePic src={user.avatar} alt='profile' title="Profile"/> : <ProfilePic src={avatarIcon} alt='profile' title="Profile"/> }