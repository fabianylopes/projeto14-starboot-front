import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';
import {Banner, Container, Title, Text, H2, Item, Items, Name, Description, Type, Price, KnowMoreButton, AddButton} from './style';
import Navbar from "../Navbar";
import Image from '../../assets/coffee.png'
import api from '../../services/api';

function Coffees(){
    const { bag, setBag } = useContext(UserContext);

    const [coffeeList, setCoffeeList] = useState([]);

    useEffect(() => getProducts(), []);

    function getProducts(){
        api.getCoffees().then((response) => setCoffeeList(response.data)).catch((error) => console.log(error));
    }

    return(
        <>
            <Navbar colorCoffee={true} colorBag={false}/>
            <Banner>
                <img src={Image} alt=""/>
                <Title>PARA TODOS OS GOSTOS</Title>
                <Text>Leve o sabor de café que você tanto gosta para a sua casa</Text>
            </Banner>
            <Container>
                <H2>Novos cafés que amamos</H2>
                <Items>
                    {coffeeList.map((c, i) => {
                        return (
                            <Item key={i}>
                                <img src={c.productImage} alt="" />
                                <Name>{c.name}</Name>
                                <Description>
                                    <Type>{`Torra ${c.roastType}`}</Type>
                                    <Price>{c.price}</Price>
                                </Description>
                                <Link to={`/coffees/${c.id}`}><KnowMoreButton>SAIBA MAIS</KnowMoreButton></Link>
                                <AddButton>ADICIONAR</AddButton>
                            </Item>
                        );
                    })}
                </Items>
            </Container>
        </> 
    );
}

export default Coffees;