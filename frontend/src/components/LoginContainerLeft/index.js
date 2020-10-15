import React from 'react';
import logo_white from '../../assets/images/logo_white.png';
import apple from '../../assets/svgs/apple.svg';
import google from '../../assets/svgs/google.svg'
import { LoginContainerLeftStyle } from './style';
import { SVGButton, MotionPara, MotionType, LogoDiv, SVGDiv, SocialDiv, SocialBtn, FooterPara } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


const LoginContainerLeft = () => {
    return (
        <LoginContainerLeftStyle>
            <LogoDiv>
                <img src={logo_white} alt='logo'/>
                <MotionType>Motion</MotionType>
                <MotionPara>Connect with friends and the world you around with Motion</MotionPara>
                <SVGDiv>
                    <SVGButton type="image" src={apple} />
                    <SVGButton type="image" src={google} />
                </SVGDiv>
            </LogoDiv>
            <SocialDiv>
                <SocialBtn href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></SocialBtn>
                <SocialBtn href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></SocialBtn>
                <SocialBtn href="https://www.instagram.com" target="_blank" ><FontAwesomeIcon icon={faInstagram} /></SocialBtn>
            </SocialDiv>                
            <FooterPara><FontAwesomeIcon icon={faCopyright} /> Motion 2020. All rights reserved.</FooterPara>
        </LoginContainerLeftStyle>
    )
}

export default LoginContainerLeft;