import { Card, Image, Title, Description, Button } from "./styled"
import {useNavigate } from "react-router-dom";

function HomeCard(props){
    const {image, description, route} = props
    const redirectUser = useNavigate()
    return(
        <Card>
            <Image src={image}/>
            <Title>INDICAÇÃO DO ESPECIALISTA</Title>
            <Description>{description}</Description>
            <Button onClick={()=>redirectUser(route)}>SAIBA MAIS</Button>
        </Card>
    ) 
}

export default HomeCard