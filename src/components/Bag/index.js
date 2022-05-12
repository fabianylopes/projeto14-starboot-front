import { useContext } from 'react'

import UserContext from '../../contexts/UserContext';
import Navbar from '../Navbar'
import { Text, Products, Product, Info, Name, Quantity, Price } from './style';

function Bag() {

  const { bag, setBag } = useContext(UserContext);

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
          <img src="" alt=""/>
          <Info>
            <Name></Name>
            <Quantity></Quantity>
            <Price></Price>
          </Info>
        </Product>
      </Products>
    </>
  )
}

export default Bag;
