import styled from 'styled-components'
import codingbg from '../../../assets/images/feedPics/codingbg3.jpg'

export const MyProfilePageStyle = styled.div`
    background-image: url(${codingbg});
    width: 100vw;
    height: 240px;
    background-size: 100%;
    background-repeat: no-repeat;
`

export const MyProfileContainerStyle = styled.div`
    width: 80%;
    height: 400px;
    margin: 10%;
    background-color: white;
    border: solid 1px #f2f2f2;
    border-radius: 4px;
    position: absolute;
    display: flex;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`

export const MyProfileInfoLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    width: 25%;
    border: solid 1px #f2f2f2;
    border-radius: 4px;
`

export const MyProfileInfoRight = styled.div`
    display: flex;
    width: 75%;
    height: 100%;
    flex-direction: column;
`

export const MyProfileAboutSection = styled.div`
    display: flex;
    height: 67%;
    width: 100%;
    padding: 5% 10%;
    flex-direction: column;
    border-radius: 4px;
    border: solid 1px #f2f2f2;
`

export const MyProfileStats = styled.div`
    display: flex;
    height: 33%;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    border-radius: 4px;
    border: solid 1px #f2f2f2;
`

export const MyProfilePic2 = styled.img`
    width: 40%;
    height: 25%;
    border-radius: 50%;
    margin-bottom: 12px;
    :hover {
        width: 80%;
        height: 50%;
        
    }
`
export const MyProfileName = styled.div`
    font-size: 24px;
    margin-bottom: 8px;
`

export const MyProfileLocation = styled.div`
    font-size: 14px;
    margin-bottom: 40px;
`

export const MyProfileAboutTop = styled.div`
    display: flex;
    height: 70%;
`

export const MyProfileAboutBottom = styled.div`
    display: flex;
    height: 30%;
`

export const About = styled.div`
    width: 50%;
    font-size: 16px;
    overflow: auto;
`

export const ThingsILike = styled.div`
    width: 50%;
    font-size: 14px;
    overflow-y: scroll;
    scrollbar-width: none; 
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
        width: 0;
        height: 0,
    }
`

export const ContactDetails = styled.div`
    width: 200px;
    margin-right: 60px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 26px;
`
export const StatBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80px;
    height: 80px;
    justify-content: space-evenly;
`

export const StatNumber = styled.div`
    font-size: 24px;
`

export const LikeBoxItems = styled.div`
    font-size: 14px;
    background-color: #f2f2f2;
    border-radius: 18px;
    text-align: center;
    padding: 8px 16px;
    margin: 0 8px 16px 0;
`

export const LikeBoxDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`