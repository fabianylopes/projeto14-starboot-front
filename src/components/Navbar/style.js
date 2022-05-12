import styled from "styled-components";

const Nav = styled.header`
    width: 100%;
    height: 60px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

const HomeLogo = styled.div`
    width: 50px;
    height: 50px;
`

const Brand =  styled.img`
    width: 100%;
    height: 100%;
`

const Options = styled.div`
    display: flex;
`

const Coffee = styled.h3`
    margin: 10px;
    font-size: large;
    color: ${({colorCoffee}) => colorCoffee ? '#006341' : '#929292' }
`

const Bag = styled.h3`
    margin: 10px;
    font-size: large;
    color: ${({colorBag}) => colorBag ? '#006341' : '#929292' }
`

export{Nav, HomeLogo, Brand,  Options, Coffee, Bag}

