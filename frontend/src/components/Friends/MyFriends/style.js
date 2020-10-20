import styled from 'styled-components'

export const MyFriendsStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 360px;
    height: 487px;
    background-color: white;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    overflow: hidden;
    margin: 20px 20px;
    padding: 26px;
`

export const MyFriendImage = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-bottom: 10px;
`

export const MyFriendName = styled.p`
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 7px;
`

export const MyFriendLocation = styled.div`
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 15px;
`

export const MyFriendBtns = styled.div`
    width: 260px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const MyFriendAbout = styled.p`
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 30px;
`

export const MyFriendLikes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`