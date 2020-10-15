import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authAction, authUser } from '../../store/actions/authAction'
import { LoginContainerRightStyle, LoginForm, SignInDiv, InputUsername, 
        InputPassword, SubmitBtn, SignInType, SignUpBtn, SignUpDiv } from './style';
import { useHistory } from 'react-router-dom'
import baseUrl from '../../helpers/constants'

const LoginContainerRight = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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
            body: JSON.stringify({username, password})
        };
        fetch( `${baseUrl}/backend/api/auth/token/`, config)
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
                    <InputUsername type='text' value={username} onChange={(event)=>setUsername(event.target.value)} placeholder='Username'/>
                    <InputPassword type='password' value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='Password' />
                    <SubmitBtn type='submit' value={signIn} onClick={handleSubmit}/>
                </LoginForm>
            </SignInDiv>
        </LoginContainerRightStyle>
    )
}

export default LoginContainerRight