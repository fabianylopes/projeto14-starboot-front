import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from 'react-router';
import axios from 'axios'

import { Container, ProductImage, LargeButton, Subtitle, GoesWellWithSection, Paragraph, LongText } from './style'
import { Title } from "../HomeCard/styled"
import Navbar from '../Navbar'
import BagContext from '../../contexts/BagContext';

function Coffee() {
    const navigate = useNavigate();

    const { coffee_id } = useParams();

    const { bag } = useContext(BagContext);

    const [loading, setLoading] = useState(false);
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
    });

    function getCoffee() {
        const promise = axios.get("https://star-boot.herokuapp.com/coffees", {
            params: {
                id: coffee_id
            }
        });

        promise.then((response) => {
            setCoffeAtribut(response.data);
        });
    }

    useEffect(getCoffee, [])

    function choseCoffee() {
        setLoading(true)

        const promise = axios.put("https://star-boot.herokuapp.com/bag",
            {
                requiredQuantity: 1
            },
            {
                params: {
                    product_id: coffee_id,
                    bag_token: bag
                }
            });

        promise.then(() => {
            navigate('/bag');
        });

        promise.catch((error) => {
            setLoading(false)
            alert('Ops. Parece que o ítem ficou indisponível em nosso estoque. Nossas sinceras desculpas.', error)
            console.log(error)
        })

    }

    return (
        <>
            <Navbar colorCoffee={true} colorBag={false} />
            <main>
                <Container height={'411px'} background_Color={"white"}>
                    <ProductImage src={coffeeAtributs.productImage} />
                    <LargeButton onClick={choseCoffee} unavailable={coffeeAtributs.quantity < 1} disabled={coffeeAtributs.quantity < 1}>
                        {loading ? <ThreeDots color="white" height={100} width={100} /> : coffeeAtributs.quantity < 1 ? "INDISPONÍVEL" : "ADICIONAR"}
                    </LargeButton>
                </Container>
                <Container height={'170px'} background_Color={'rgba(238, 235, 232, 1)'} justify_content={"space-around"}>
                    <Title>{coffeeAtributs.name}</Title>
                    <Subtitle color='rgba(27, 113, 56, 1)'>{coffeeAtributs.density}</Subtitle>
                    <GoesWellWithSection>
                        <Subtitle >PARA ACOMPANHAR</Subtitle>
                        <Paragraph>{coffeeAtributs.goesWellWith}</Paragraph>
                    </GoesWellWithSection>
                </Container>
                <Container height={'100px'}>
                    <Subtitle color='rgba(27, 113, 56, 1)'>DESCRIÇÃO</Subtitle>
                </Container>
                <Container>
                    <ProductImage src={coffeeAtributs.descriptionImage} />
                    <LongText >
                        {coffeeAtributs.description}
                    </LongText>
                </Container>
                <Subtitle color='rgba(27, 113, 56, 1)'>Preço - R$: {coffeeAtributs.price}</Subtitle>
            </main>
        </>
    )
}

export default Coffee;
