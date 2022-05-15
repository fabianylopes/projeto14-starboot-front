import { useContext } from 'react';
import { useNavigate } from 'react-router';

import { Title, Text, Products, Product, Info, Name, Quantity, Price, Line, Total, Button } from './style';
import BagContext from '../../contexts/BagContext';
import Navbar from '../Navbar'
import CostumerData from './CostumerData';
//import Success from './Success';

function Bag() {
  const navigate = useNavigate();

  const { bag } = useContext(BagContext);


  if(bag.length !== 0){
    return (
      <>
        <Navbar colorCoffee={false} colorBag={true}/>
        <Text font-size={'50px'}>O seu carrinho está vazio!</Text>
      </>
    );
  }
  console.log(bag);
  return (
    <>
      <Navbar colorCoffee={false} colorBag={true}/>
      <Title>PRODUTOS ADICIONADOS</Title>
      <Products>
        <Product>
          <img src={bag.productImage} alt=""/>
          <Info>
            <Name>{bag.name}</Name>
            <Quantity>Quantidade: 1</Quantity>
            <Price>R$ {bag.price}</Price>
          </Info>
        </Product>
      </Products>
      <Line></Line>
      <Total>
        <Text>TOTAL:</Text>
        <Text>R$ 36,99</Text>
      </Total>
      {bag.userInfo !== null && <CostumerData/>}
      <Button onClick={() => navigate('/sign-in')}>FECHAR PEDIDO</Button>
      {/* <Success/> */}
    </>
  )
}

export default Bag;
