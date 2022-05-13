import { useNavigate } from 'react-router';
import { useState, useContext } from  'react';

import UserContext from '../../contexts/UserContext';
import {Img, Title, Input, Button, Form, StyledLink } from './style';
import Logo from '../../assets/logo.png';
import api from '../../services/api';

function SignIn() {
  const navigate = useNavigate();

  const { userInfo, setUserInfo } = useContext(UserContext);

  const [formInfo, setFormInfo] = useState({});

  function handleSignIn(e){
    e.preventDefault();

    api.signIn(formInfo).then(handleSuccess).catch(handleFailure);
  }

  function handleSuccess(response){
    setUserInfo(response.data.customerInfo)
    navigate('/')
  }

  function handleFailure(error){
    alert(`${error}!\nPreencha os campos corretamente!`);
    setFormInfo({});
  }

  return (
    <>  
        <Img>
          <img src={Logo}alt=""/>
        </Img>
        <Title>STARBOOT</Title>
        <Form onSubmit={handleSignIn}>
          <Input
          type="email" 
          placeholder="E-mail" 
          value={formInfo.email || ''} 
          onChange={e => setFormInfo({...formInfo, email: e.target.value})} 
          required
          >
          </Input>

          <Input
          type="password"
          placeholder="Senha"
          value={formInfo.password || ''} 
          onChange={e => setFormInfo({...formInfo, password: e.target.value})} 
          required
          >
          </Input>

          <Button type="submit">Entrar</Button>
        </Form>
        <StyledLink to="/sign-up">Primeira vez? Cadastre-se</StyledLink>
    </>
  )
}

export default SignIn;