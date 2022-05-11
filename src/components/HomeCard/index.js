import { Card, Image, Title, Description, Button } from "./styled"
import {useNavigate } from "react-router-dom";

function HomeCard(props){
    const {image, title, description, route} = props
    const redirectUser = useNavigate()
    return(
        <Card hasImage = {image !== "" }>
            <Image src={image} hasImage = {image !== "" }/>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button onClick={()=>redirectUser(route)}>SAIBA MAIS</Button>
        </Card>
    ) 
}

export default HomeCard