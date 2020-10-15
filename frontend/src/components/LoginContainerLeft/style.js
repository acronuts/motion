// import React from 'react';
import styled from 'styled-components';
import backgroundIMG from '../../assets/images/background_image.png'

export const LoginContainerLeftStyle = styled.section`
    height: 100vh;
    width: 41.67%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    background-image: url(${backgroundIMG}), linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;
`

export const LogoDiv = styled.div`
    height: 283px;
    width: 275px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
export const SVGDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
`

export const SVGButton = styled.input`
    height: 40px;
    width: 126px;
    border: solid 2px #A89ECF;
    border-radius: 100px;
    padding: 10px;
    color: white;
    outline: none;
`
export const MotionType = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.75px;
`
 export const MotionPara = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    opacity: 0.6;
 `

 export const SocialDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 170px;
    height: 41px;
    margin-top: 10em;
 `

export const SocialBtn = styled.a`
    font-size: 18px;
    border-radius: 100px;
    background-color: white;
    opacity: 0.4;
    background-position: left;
    padding: 0.9em 0.8em;
    width: 50px;
    height: 50px;
    border: none;
    outline: none;
    text-decoration: none;
    text-align: center;
    color: #948AD0;
    :hover {
        opacity: 0.2;
    }
    

`


export const FooterPara = styled.footer`
    margin-top: 40px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    opacity: 0.6;
`