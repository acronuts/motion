import styled from 'styled-components'

export const MyPostStyle = styled.div`
    width: 45%;
    min-width: 45%;
    background-color: white;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    overflow: hidden;
`

export const MyPostHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 20px;
`

export const Menu = styled.div`
    /* margin: 0 20px; */
`

export const MyPostContent = styled.div`
    max-height: 150px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 16px;
    padding: 0 30px 0 30px;
    overflow-y: scroll;
    scrollbar-width: none; 
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
        width: 0;
        height: 0,
    }
`

export const MyPostFooter = styled.div`
    display: flex;
    margin: 30px;
`

export const MyPostLike = styled.div`
    display: flex;
    font-size: 14px;
    width: 60px;
    justify-content: space-between;
    margin-right: 20px;
    align-items: center;
`

export const MyPostShare = styled.div`
    display: flex;
    font-size: 14px;
    width: 70px;
    justify-content: space-between;
    align-items: center;
`
export const MyPostNumOfLikes = styled.div`
    margin-left: auto;
    font-size: 14px;
` 

export const UserPostInfo = styled.div`
    margin-right: auto;
`

export const UserPostImg = styled.img`
    margin-right: 10px;
    width: 46px;
    height: 46px;
    border-radius: 50%;
`
export const TimeStamp = styled.p`
    font-size: 14px;
    color: #949499;
`