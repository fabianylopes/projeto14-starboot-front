
import { useNavigate } from 'react-router';
import { useContext, useState, useEffect } from 'react'

import { Title, Text, Products, Product, Info, Name, Quantity, Price, Line, Total, Button } from './style';
import UserContext from '../../contexts/UserContext';
import BagContext from '../../contexts/BagContext';
import Navbar from '../Navbar'
import CostumerData from './CostumerData';
//import Success from './Success';
import axios from 'axios'

function Bag() {
  const navigate = useNavigate();

  const [total, setTotal] = useState(0.0)
  const [items, setItems] = useState([]) //{productImage:'', name: '', quantity: 0.0, price: 0.0}
  const [customer_id, setCustomer_id] = useState(undefined)
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
      {/* <Success/> */}
      {
        customer_id  ? <CostumerData/>: ''
      }
      {
        customer_id ? <Button>COMPRAR</Button> : <Button onClick={() => navigate('/sign-in')}>FECHAR PEDIDO </Button>
      }
    </>
  )
}



export default Bag;
