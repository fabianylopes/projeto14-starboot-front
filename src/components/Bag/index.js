import { useContext, useState, useEffect } from 'react'

import UserContext from '../../contexts/UserContext';
import BagContext from '../../contexts/BagContext';
import Navbar from '../Navbar'
import { Text, Products, Product, Info, Name, Quantity, Price, Line, Total, Button } from './style';
import CostumerData from './CostumerData';
import axios from 'axios'

function Bag() {

  //const { bag } = useContext(UserContext);
  const [total, setTotal] = useState(0.0)
  const [items, setItems] = useState([]) //{productImage:'', name: '', quantity: 0.0, price: 0.0}
  const [customer_id, setCustomer_id] = useState(null)
  const {bag} = useContext(BagContext)

  function getBag(){
    const promise = axios.get("http://localhost:5000/bag",{ headers: { Authorization: `Bearer ${bag}` }})
    promise.then((response) =>{
      const {products, customer_id} = response.data
      setCustomer_id(customer_id)
      setItems(products)
      evaluateTotal(products)
    })
  }

  function evaluateTotal(data){
    let total = 0 
    for(let item of data){
      total += item.price
    }
    setTotal(total)
  }

  useEffect(getBag, [])

  if(items.length === 0){
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
        {
          items.map((item, index) =>{
           
            return(
              <Product key={index}>
              <img src={item.productImage} alt=""/>
              <Info>
                <Name>{item.name}</Name>
                <Quantity>Quantidade: {item.requiredQuantity}</Quantity>
                <Price>R$ {item.price}</Price>
              </Info>
            </Product>
            )
          })
        }
      </Products>
      <Line></Line>
      <Total>
        <Text>TOTAL:</Text>
        <Text>{`R$ ${total}`}</Text>
      </Total>
      {
        customer_id !== null ? <CostumerData/>: ''
      }
      {
        customer_id !== null ? <Button>COMPRAR</Button> : <Button>FECHAR PEDIDO </Button>
      }
    </>
  )
}



export default Bag;
