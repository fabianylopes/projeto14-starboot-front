import { useContext } from 'react';

import { Container, Text } from './style';
//import BagContext from '../../contexts/BagContext';
import UserContext from '../../contexts/UserContext';

function CostumerData() {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo.userInfo.name)
  return (
    <Container>
        <Text>SERÁ ENVIADO PARA: {userInfo.userInfo.name}</Text>
        <Text>Rua: {userInfo.userInfo.street}, {userInfo.userInfo.number}<br/>{userInfo.userInfo.city}-{userInfo.userInfo.state}</Text>
        <Text>Previsão de entrega: 2 dias úteis</Text>
    </Container>
  )
}

export default CostumerData;
