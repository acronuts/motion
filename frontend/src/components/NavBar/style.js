import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBarStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    height: 80px;
    width: 100%;
    background-color: white;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`
export const MotionHome = styled.div`
    font-size: 22px;
    width: 105px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 110px;
    :hover {
        border-bottom: 2px solid #AD73FD;
    }
`
export const Posts = styled.div`
    font-size: 16px;
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 70px;
    :hover {
        border-bottom: 2px solid #AD73FD;
    }
`
export const FindFriends = styled.div`
    font-size: 16px;
    width: 130px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    :hover {
        border-bottom: 2px solid #AD73FD;
    }
`

export const BellIcon = styled.div`
    margin-left: auto;
`

export const Profile = styled.div`
    margin-left: 20px;
`
export const ProfilePic = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

export const Menu = styled.button`
    margin: 0 20px;
    font-size: 26px;
    background: none;
    border: none;
    outline: none;
    color: #b3b3b3;
    :hover {
        cursor: pointer;
    }
`
export const NavLink = styled(Link)`
    text-decoration: none;
    height: 100%;
`