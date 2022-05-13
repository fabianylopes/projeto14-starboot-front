import { useContext } from 'react'

import UserContext from '../../contexts/UserContext';
import Navbar from '../Navbar'
import { Text, Products, Product, Info, Name, Quantity, Price, Line, Total, Button } from './style';
import CostumerData from './CostumerData';

function Bag() {

  const { bag } = useContext(UserContext);


  if(bag.length === 0){
    return (
      <>
        <Navbar colorCoffee={false} colorBag={true}/>
        <Text>O seu carrinho está vazio!</Text>
      </>
    );
  }

  return (
    <>
      <Navbar colorCoffee={false} colorBag={true}/>
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
      <CostumerData/>
      <Button>FECHAR PEDIDO </Button>
    </>
  )
}

export default Bag;
