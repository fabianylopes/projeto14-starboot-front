import { useContext } from 'react';

import { Container, Text } from './style';
import BagContext from '../../contexts/BagContext';

function CostumerData() {
  const { bag } = useContext(BagContext);

  return (
    <Container>
        <Text>SERÁ ENVIADO PARA: {bag.userInfo.name}</Text>
        <Text>Rua: {bag.userInfo.street}, {bag.userInfo.number}<br/>{bag.userInfo.city}-{bag.userInfo.state}</Text>
        <Text>Previsão de entrega: 2 dias úteis</Text>
    </Container>
  )
}

export default CostumerData;
