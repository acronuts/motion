import React from 'react';
import LoginContainerLeft from '../../components/LoginContainerLeft';
import LoginContainerRight from '../../components/LoginContainerRight';
import { LoginStyle } from './style'

const Login = () => {
  return (
    <LoginStyle>
      <LoginContainerLeft />
      <LoginContainerRight />
    </LoginStyle>  
  );
}

export default Login;