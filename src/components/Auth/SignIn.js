import { useNavigate } from 'react-router';
import { useState, useContext } from 'react';

import BagContext from '../../contexts/BagContext';
import UserContext from '../../contexts/UserContext';
import { Img, Title, Input, Button, Form, StyledLink } from './style';
import Logo from '../../assets/logo.js';
import api from '../../services/api';
import axios from 'axios';

function SignIn() {
  const navigate = useNavigate();

  const { userInfo, setUserInfo } = useContext(UserContext);
  const { bag } = useContext(BagContext);

  const [formInfo, setFormInfo] = useState({});

  function handleSignIn(e) {
    e.preventDefault();

    api.signIn(formInfo).then(handleSuccess).catch(handleFailure);
  }

  function handleSuccess(response) {
    //setUserInfo(response.data.customerInfo);
    ///console.log(userInfo)
    //setUserInfo({...userInfo, userInfo: response.data.customerInfo});
    const promise = axios.put("http://localhost:5000/bag",
      {
        newCustomer_id: response.data.customer_id,
        bag_token: bag
      })

    promise.then(() => {
      navigate('/bag')
    })
    promise.catch((error) => {

      alert('Não foi possível adicionar o item', error)
      console.log(error)
    })
  }

  function handleFailure(error) {
    alert(`${error}!\nPreencha os campos corretamente!`);
    setFormInfo({});
  }


  return (
    <>
      <Img>
       {Logo}
      </Img>
      <Title>STARBOOT</Title>
      <Form onSubmit={handleSignIn}>
        <Input
          type="email"
          placeholder="E-mail"
          value={formInfo.email || ''}
          onChange={e => setFormInfo({ ...formInfo, email: e.target.value })}
          required
        >
        </Input>

        <Input
          type="password"
          placeholder="Senha"
          value={formInfo.password || ''}
          onChange={e => setFormInfo({ ...formInfo, password: e.target.value })}
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