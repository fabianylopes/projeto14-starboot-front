import { useNavigate } from 'react-router';
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'

import { Title, Text, Products, Product, Info, Name, Quantity, Price, Line, Total, Button, Box, H1, H2, SuccessButton } from './style';
import BagContext from '../../contexts/BagContext';
import UserContext from '../../contexts/UserContext';
import Navbar from '../Navbar'
import CostumerData from './CostumerData';
import api from '../../services/api';

function Bag() {
  const navigate = useNavigate();
  
  const { setUserInfo } = useContext(UserContext);
  const { bag } = useContext(BagContext);
  const token = bag;

  const [orderNumber, setOrderNumber] = useState(null);
  const [total, setTotal] = useState(0.0);
  const [items, setItems] = useState([]);
  const [customer_id, setCustomer_id] = useState(undefined);

  function getBag(){
    const promise = axios.get("http://localhost:5000/bag",{ headers: { Authorization: `Bearer ${bag}` }})
    
    promise.then((response) =>{
      const {products, customer_id} = response.data;

      setCustomer_id(customer_id)
      checkCustomerID(customer_id)
      setItems(products)
      evaluateTotal(products)
    });
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
      })
    }
  }

  function evaluateTotal(data){
    let total = 0;
    for(let item of data){
      total += item.price;
    }
    setTotal(total.toFixed(2));
  }

  useEffect(getBag, []);

  function checkOut(){
    const confirmBuy = window.confirm('Deseja realmente finalizar a compra?');
    
    if(confirmBuy){
      api.checkout(bag, token).then(handleSuccess).catch((error) => console.log("deu ruim", error));
    }
    
  }

  function handleSuccess(response){
    const {orderNumber} = response.data
    setOrderNumber(orderNumber);
   
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

      {customer_id && <CostumerData/>}
      
      <LastPage/>
    </>
  );

  function LastPage(){
    if(orderNumber  && customer_id ){
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
        customer_id ? <Button onClick={checkOut}>COMPRAR</Button> : <Button onClick={() => navigate('/sign-in')}>FECHAR PEDIDO</Button>
      );
    }
  }
}

export default Bag;