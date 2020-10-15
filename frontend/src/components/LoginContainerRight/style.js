import styled from 'styled-components';
import avatar from '../../assets/svgs/avatar.svg';
import password from '../../assets/svgs/password.svg'

export const LoginContainerRightStyle = styled.section`
    height: 100vh;
    width: 58.33%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 40px;
    padding-bottom: 80px;
    overflow: hidden;
`

export const SignInType = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    height: 80%;
    width: 100%;
`

export const SignInDiv = styled.div`
    height: 460px;
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const InputUsername = styled.input`
    background-image: url(${avatar});
    background-repeat: no-repeat;
    height: 45px;
    width: 340px;
    background-position: left;
    border: none;
    border-bottom: solid 2px #d6d6d6;
    padding: 10px 30px;
    outline: none;
`

export const InputPassword = styled.input`
    background-image: url(${password});
    background-repeat: no-repeat;
    height: 45px;
    width: 340px;
    background-position: left;
    border: none;
    border-bottom: solid 2px #d6d6d6;
    padding: 10px 30px;
    outline: none;
    margin-top: 20px;
`

export const SubmitBtn = styled.input`
    width: 280px;
    height: 60px;
    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    border-radius: 30px;
    border: none;
    color: white;
    outline: none;
    margin-top: auto;
    :hover {
        cursor: pointer;
    }
`

export const SignUpBtn = styled.input`
    width: 120px;
    height: 40px;
    border: solid 1px #d6d6d6;
    background-color: #ffffff;
    border-radius: 30px;
    margin-left: 17px;
    font-size: 10px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    outline: none;
`

export const SignUpDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

`