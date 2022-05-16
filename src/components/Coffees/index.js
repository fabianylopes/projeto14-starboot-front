import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';

import BagContext from '../../contexts/BagContext';
import {Banner, Container, Title, Text, H2, Item, Items, Name, Description, Type, Price, KnowMoreButton, AddButton} from './style';
import Navbar from "../Navbar";
import Image from '../../assets/coffee.png'
import api from '../../services/api';

function Coffees(){
    const navigate = useNavigate();

    const { bag } = useContext(BagContext);
    
    const [coffeeList, setCoffeeList] = useState([]);

    useEffect(() => getProducts(), []);

    function getProducts(){
        api.getCoffees().then((response) => setCoffeeList(response.data)).catch((error) => console.log(error));
    }

    function choseCoffee(coffee_id){
        const promise = axios.put("http://localhost:5000/bag",
            {
                requiredQuantity: 1
            }, 
            {
                params: {
                    product_id: coffee_id,
                    bag_token: bag
                }
            })

        promise.then(() => {
            navigate('/bag')
        })
        promise.catch((error)=>{
            alert('Não foi possível adicionar o item', error)
            console.log(error)
        })
    }

    return(
        <>
            <Navbar colorCoffee={true} colorBag={false}/>
            <Banner>
                <img src={Image} alt=""/>
                <Title>PARA TODOS<br/> OS GOSTOS</Title>
                <Text>Leve o sabor de café que você tanto gosta para a sua casa</Text>
            </Banner>
            <Container>
                <H2>Novos cafés que amamos</H2>
                <Items>
                    {coffeeList.map(({productImage, name, roastType, price, _id }, i) => {
                        return (
                            <Item key={i}>
                                <img src={productImage} alt="" />
                                <Name>{name}</Name>
                                <Description>
                                    <Type>{`Torra ${roastType}`}</Type>
                                    <Price>R$ {price}</Price>
                                </Description>
                                <Link to={`/coffees/${_id}`}><KnowMoreButton>SAIBA MAIS</KnowMoreButton></Link>
                                <AddButton onClick={() => choseCoffee(_id)}>ADICIONAR</AddButton>
                            </Item>
                        );
                    })}
                </Items>
            </Container>
        </> 
    );
}

export default Coffees;