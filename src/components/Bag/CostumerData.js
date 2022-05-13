import { useContext } from 'react';

import { Container, Text } from './style';
import UserContext from '../../contexts/UserContext';

function CostumerData() {
  const { userInfo } = useContext(UserContext);

  return (
    <Container>
        <Text>SERÁ ENVIADO PARA: {userInfo.name}</Text>
        <Text>Rua: {userInfo.street}, {userInfo.number}<br/>{userInfo.city}/{userInfo.state}</Text>
        <Text>Previsão de entrega: 2 dias úteis</Text>
    </Container>
  )
}

export default CostumerData;
