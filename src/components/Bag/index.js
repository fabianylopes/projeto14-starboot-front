
import { useNavigate } from 'react-router';
import { useContext, useState, useEffect } from 'react'

import { Title, Text, Products, Product, Info, Name, Quantity, Price, Line, Total, Button, Box, H1, H2, SuccessButton } from './style';
import BagContext from '../../contexts/BagContext';
import UserContext from '../../contexts/UserContext';
import Navbar from '../Navbar'
import CostumerData from './CostumerData';
import axios from 'axios'
import api from '../../services/api';


function Bag() {
  const navigate = useNavigate();
  
  const [orderNumber, setOrderNumber] = useState(null);
  const [total, setTotal] = useState(0.0);
  const [items, setItems] = useState([]) //{productImage:'', name: '', quantity: 0.0, price: 0.0}
  const [customer_id, setCustomer_id] = useState(undefined)
  const {bag} = useContext(BagContext)
  const { userInfo, setUserInfo } = useContext(UserContext)
  const token = bag

  function getBag(){
    const promise = axios.get("http://localhost:5000/bag",{ headers: { Authorization: `Bearer ${bag}` }})
    promise.then((response) =>{
      const {products, customer_id} = response.data
      setCustomer_id(customer_id)
      checkCustomerID(customer_id)
      setItems(products)
      evaluateTotal(products)
    })
  }

  function checkCustomerID(id){
    if(id){
      const promise = axios.get('http://localhost:5000/customer', {
        params: {
            id
        }
    }
      )
      promise.then((response)=>{
        setUserInfo(response.data)
        console.log(userInfo)
      })
    }
  }

  function evaluateTotal(data){
    let total = 0 
    for(let item of data){
      total += item.price
    }
    setTotal(total.toFixed(2))
  }

  useEffect(getBag, []);

  function checkOut(){
    
    const confirmBuy = window.confirm('Deseja realmente finalizar a compra?');
    
    if(confirmBuy){
      api.checkout(bag, token).then(handleSuccess).catch((error) => console.log(error));
    }
    
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
