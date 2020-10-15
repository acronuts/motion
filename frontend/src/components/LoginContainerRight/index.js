import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authAction, authUser } from '../../store/actions/authAction'
import { LoginContainerRightStyle, LoginForm, SignInDiv, InputUsername, 
        InputPassword, SubmitBtn, SignInType, SignUpBtn, SignUpDiv } from './style';
import {useHistory} from 'react-router-dom'


const LoginContainerRight = () => {
    const [email, setEmail] = useState('jpp_idema@hotmail.com')
    const [password, setPassword] = useState('qwertz12')
    const [signIn, setSignIn]= useState('Sign In')
    const dispatch = useDispatch();
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault();

        const config = {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({email, password})
        };
        fetch('https://motion.propulsion-home.ch/backend/api/auth/token/', config)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                dispatch(authAction(data.access));
                dispatch(authUser(data.user));
                localStorage.setItem('token', data.access)
                if (data.access) {
                    history.push('/')
                }
            })
        }

    return (
        <LoginContainerRightStyle>
            <SignUpDiv>
                <label htmlFor='SignUpBtn'>Don't have an account?</label>
                <SignUpBtn type='button' id='SignUpBtn' value='Sign Up' />
            </SignUpDiv>
            <SignInDiv>
                <SignInType>Sign in</SignInType>
                <LoginForm>
                    <InputUsername type='text' value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Email'/>
                    <InputPassword type='password' value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='Password' />
                    <SubmitBtn type='submit' value={signIn} onClick={handleSubmit}/>
                </LoginForm>
            </SignInDiv>
        </LoginContainerRightStyle>
    )
}

export default LoginContainerRight