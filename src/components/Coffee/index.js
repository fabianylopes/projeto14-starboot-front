import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios'

import UserContext from '../../contexts/UserContext';
import { Container, ProductImage, LargeButton, ProductHeader, Subtitle, GoesWellWithSection, Paragraph, DescriptionSection, LongText } from './style'
import { Title } from "../HomeCard/styled"

function Coffee() {
    const navigate = useNavigate();

    const { bag, setBag } = useContext(UserContext);

    const { coffee_id } = useParams()
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
    function getCoffee() {
        const promise = axios.get("http://localhost:5000/coffees", {
            params: {
                id: coffee_id
            }
        })
        promise.then((response) => {
            setCoffeAtribut(response.data);
        })
    }

    useEffect(getCoffee, [])

    function choseCoffee(){
        setBag(coffeeAtributs);
        navigate('/bag')
    }

    console.log(bag)

    return (
        <>
            <Navbar />
            <main>
                <Container height={'411px'} background_Color={"white"}>
                    <ProductImage src={coffeeAtributs.productImage} />
                    <LargeButton onClick={choseCoffee}>ADICIONAR</LargeButton>
                </Container>
                <Container height={'170px'} background_Color={'rgba(238, 235, 232, 1)'} justify_content={"space-around"}>
                    <Title>{coffeeAtributs.name}</Title>
                    <Subtitle>{coffeeAtributs.density}</Subtitle>
                    <GoesWellWithSection>
                        <Subtitle>PARA ACOMPANHAR</Subtitle>
                        <Paragraph>{coffeeAtributs.goesWellWith}</Paragraph>
                    </GoesWellWithSection>
                </Container>
                <Container height={'100px'}>
                    <Subtitle>DESCRIÇÃO</Subtitle>
                </Container>
                <Container>
                    <ProductImage src={coffeeAtributs.descriptionImage} />
                    <LongText >
                        {coffeeAtributs.description}
                    </LongText>
                </Container>
                <Subtitle>Preço: {coffeeAtributs.price}</Subtitle>
            </main>
        </>

    )
}

export default Coffee

