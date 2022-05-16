
import { useNavigate } from 'react-router';
import { useContext, useState, useEffect } from 'react'

import { Title, Text, Products, Product, Info, Name, Quantity, Price, Line, Total, Button, Box, H1, H2, SuccessButton } from './style';
import BagContext from '../../contexts/BagContext';
import Navbar from '../Navbar'
import CostumerData from './CostumerData';
import axios from 'axios'
import api from '../../services/api';

function Bag() {
  const navigate = useNavigate();

  const { bag } = useContext(BagContext);
  
  const [orderNumber, setOrderNumber] = useState(null);
  const [total, setTotal] = useState(0.0);
  const [items, setItems] = useState([]) //{productImage:'', name: '', quantity: 0.0, price: 0.0}
  const [customer_id, setCustomer_id] = useState(undefined)
  const token = bag.token;

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
    setTotal(total.toFixed(2))
  }

  useEffect(getBag, [getBag]);

  function checkOut(){
    api.checkout(bag, token).then(handleSuccess).catch((error) => console.log(error));
  }

  function handleSuccess(response){
    setOrderNumber(response.data);
  }
  

  if(items.length === 0){
    return (
      <>
        <Navbar colorCoffee={false} colorBag={true}/>
        <Text font_size={'26px'}>O seu carrinho está vazio!</Text>      
      </>
    );
  }
  
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

      {customer_id !== undefined  && <CostumerData/>}
      
      <LastPage/>
    </>
  )


  function LastPage(){
    if(orderNumber !== null && customer_id !== undefined){
      return (
        <Box>
          <div>
              <H1>SUCESSO</H1>
              <H2>NUMERO DO PEDIDO: {orderNumber}</H2>
          </div>
          <SuccessButton onClick={() => navigate('/coffees')}>VOLTAR A COMPRAR</SuccessButton>
        </Box>
      );
    } else {
      return (
        customer_id !== undefined ? <Button onClick={checkOut}>COMPRAR</Button> : <Button onClick={() => navigate('/sign-in')}>FECHAR PEDIDO</Button>
      );
    }

  }

  
}



export default Bag;
