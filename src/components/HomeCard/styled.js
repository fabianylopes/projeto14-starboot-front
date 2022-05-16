import styled from "styled-components";

const Card = styled.article`
    background-color: rgba(238, 235, 232, 1);
    width: 100%;
    height: ${props => props.hasImage ? '477px' : '233px'};
    margin-bottom: 10px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  space-between;
`

const Image = styled.img`
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
      font-family: 'Raleway', sans-serif;
`

const Button = styled.button`
    width: 235px;
    height: 45px;
    background: rgba(27, 113, 56, 1);
    color: white; 
    border: none;
    border-radius: 50px;
    font-size: medium;
    margin-bottom: 20px;
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export {Card, Image, Title, Description, Button}