import { useNavigate } from 'react-router';
import { useState } from  'react';

import {Img, Text, Title, Input, SmallerInput, Button, Form, Div, StyledLink } from './style';
import Logo from '../../assets/logo.js';
import api from '../../services/api';

function SignUp() {
  const navigate = useNavigate();

  const [formInfo, setFormInfo] = useState({});

  function handleSignUp(e){
    e.preventDefault();

    if(formInfo.password !== formInfo.confirmPassword){
      alert('As senhas devem ser iguais');
      return;
    }

    const userData = {...formInfo}
    delete userData.confirmPassword;
    
    api.signUp(userData).then(() => navigate('/sign-in')).catch(handleFailure);
  }


  function handleFailure(error){
    alert(`${error}!\nPreencha os campos corretamente!`);
    setFormInfo({});
  }

  return (
    <>  
      <Img>
        {Logo}
      </Img>
      <Title>STARBOOT</Title>
      <Form onSubmit={handleSignUp}>
        <Text>PESSOAL</Text>
        <Input 
        type="text"
        placeholder="Nome"
        value={formInfo.name || ''} 
        onChange={e => setFormInfo({...formInfo, name: e.target.value})} 
        required
        >
        </Input>

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

        <Input 
        type="password"
        placeholder="Confirme a senha"
        value={formInfo.confirmPassword || ''} 
        onChange={e => setFormInfo({...formInfo, confirmPassword: e.target.value})} 
        required
        >
        </Input>

        <Text>ENDEREÇO</Text>

        <Input 
        type="text"
        placeholder="CEP"
        value={formInfo.cep || ''} 
        onChange={e => setFormInfo({...formInfo, cep: e.target.value})} 
        required
        >
        </Input>

        <Input 
        type="text"
        placeholder="RUA"
        value={formInfo.street || ''} 
        onChange={e => setFormInfo({...formInfo, street: e.target.value})} 
        required
        >
        </Input>

        <Input 
        type="number"
        placeholder="NÚMERO"
        value={formInfo.number || ''} 
        onChange={e => setFormInfo({...formInfo, number: e.target.value})} 
        required
        >
        </Input>

        <Input 
        type="text"
        placeholder="CIDADE"
        value={formInfo.city || ''} 
        onChange={e => setFormInfo({...formInfo, city: e.target.value})} 
        required
        >
        </Input>

        <Input 
        type="text"
        placeholder="ESTADO"
        value={formInfo.state || ''} 
        onChange={e => setFormInfo({...formInfo, state: e.target.value})} 
        required
        >
        </Input>

        <Text>COBRANÇA</Text>

        <Input 
        type="text"
        placeholder="Titular"
        value={formInfo.cardName || ''} 
        onChange={e => setFormInfo({...formInfo, cardName: e.target.value})} 
        required
        >
        </Input>

        <Input 
        type="text"
        placeholder="Cartão de crédito"
        value={formInfo.cardNumber || ''} 
        onChange={e => setFormInfo({...formInfo, cardNumber: e.target.value})} 
        required
        >
        </Input>

        <Div>

          <SmallerInput 
          type="number"
          placeholder="CVV"
          value={formInfo.cvv || ''} 
          onChange={e => setFormInfo({...formInfo, cvv: e.target.value})} 
          required
          >
          </SmallerInput>

          <SmallerInput 
          type="text"
          placeholder="Validade"
          value={formInfo.expiry || ''} 
          onChange={e => setFormInfo({...formInfo, expiry: e.target.value})} 
          required
          >
          </SmallerInput>

        </Div>
        <Button type="submit">Cadastrar</Button>
      </Form>
      <StyledLink to="/sign-in">Já tem uma conta? Entre agora</StyledLink>
    </>
  )
}

export default SignUp;