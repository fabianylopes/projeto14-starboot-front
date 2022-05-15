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

    const { bag, setBag } = useContext(BagContext);
    
    const [coffeeList, setCoffeeList] = useState([]);

    const [coffeeAtributs, setCoffeAtribut] = useState({
        name: '',
        price: '',
        quantity: '',
        productImage: '',
        description: '',
        descriptionImage: '',
        roastType: '',
        density: '',
        goesWellWith: ''
    })


    useEffect(() => getProducts(), []);

    function getProducts(){
        api.getCoffees().then((response) => setCoffeeList(response.data)).catch((error) => console.log(error));
    }

    function choseCoffee(coffee_id){
        const promise = axios.get("http://localhost:5000/coffees", {
            params: {
                id: coffee_id
            }
        })
        promise.then((response) => {
            setCoffeAtribut(response.data);
        })
    }
    console.log(bag);
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