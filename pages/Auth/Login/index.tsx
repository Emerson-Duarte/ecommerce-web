import React from 'react';
import LoginForm from '../../../components/LoginForm';
import MainComponent from '../../../components/shared/MainComponent';
import SignUpForm from '../../../components/SignUpForm';

const Login: React.FC = () => {
  return (
    <MainComponent>
      <br />
      <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="ACESSSAR"/>
      <br />
      <SignUpForm titlePhrase="Criar nova conta" buttonPhrase="CRIAR" />
    </MainComponent>
  )
}

export default Login;