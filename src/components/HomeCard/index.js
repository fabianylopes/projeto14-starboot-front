import { useNavigate } from "react-router-dom";

import { Card, Image, Title, Description, Button } from "./styled";

function HomeCard(props){
    const navigate = useNavigate();

    const {image, title, description, route} = props;

    return(
        <Card hasImage = {image !== "" }>
            <Image src={image} hasImage = {image !== "" }/>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button onClick={()=>navigate(route)}>SAIBA MAIS</Button>
        </Card>
    );
}

export default HomeCard;