import styled from "styled-components";

const Card = styled.article`
background-color: rgba(238, 235, 232, 1);
display: flex;
flex-direction: column;
align-items: center;
justify-content:  space-around;
width: 100%;
height: ${props => props.hasImage ? '477px' : '233px'};
margin-bottom: 10px;
`

const Image = styled.img`
background-color: red;
width: 100%;
height: 233px;
object-fit: cover;
display: ${props => props.hasImage ? "block" : 'none'};
`

const Title = styled.h1`
color: rgba(37, 37, 34, 1);
font-size: x-large;
padding: 0 30px;
text-align: center;
`

const Description = styled.h2`
color: rgba(37, 37, 34, 1);
font-size: large;
padding:0 20px;
text-align: center;
`

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 50vw;
height: 45px;
background: rgba(27, 113, 56, 1);
color: white; 
border: none;
border-radius: 50px;
font-size: medium;
`


export {Card, Image, Title, Description, Button}