import styled from "styled-components";
import { Link } from "react-router-dom";

const Img = styled.div`
    img {
        width: 80px;
        margin-top: 34px;
    }
`

const Title = styled.h1`
    font-family: 'Actor', sans-serif;
    font-size: 25px;
    line-height: 30px;
    font-weight: 400;
    color: #252522;
`

const Text = styled.h2`
    font-family: 'Actor';
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;
    margin-top: 22px;
    margin-bottom: 24px;
    color: #1B7138;
`

const Input = styled.input`
    width: 326px;
    height: 58px;
    padding-left: 8px;
    border-radius: 5px;
    border: 1px solid #1B7138;
    outline: 0;
   
    ::placeholder{
        color: #929292;
        font-family: 'Actor', sans-serif;
        font-size: 25px;
        line-height: 30px;
        font-weight: 400;
    }
`

const SmallerInput = styled.input`
    width: 150px;
    height: 58px;
    padding-left: 8px;
    border-radius: 5px;
    text-align: center;
    border: 1px solid #1B7138;
    outline: 0;
   
    ::placeholder{
        color: #929292;
        font-family: 'Actor', sans-serif;
        font-size: 25px;
        line-height: 30px;
        font-weight: 400;
        text-align: center;
    }
`

const Button = styled.button`
    background-color: #1B7138;
    color: #fff;
    width: 326px;
    height: 46px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    line-height: 23px;
    font-weight: 700;
    cursor: pointer;
`

const Form = styled.form`
    margin-top: 24px;
    margin-bottom: 22px;

    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledLink = styled(Link)`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 30px;
    color: #03A12D;
`

export { 
    Img,
    Title, 
    Text,
    Input, 
    SmallerInput,
    Button,
    Form, 
    Div,
    StyledLink 
}
