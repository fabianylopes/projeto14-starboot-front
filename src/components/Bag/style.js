import styled from 'styled-components';

const Container = styled.div`
  width: 334px;
  height: 130px;
  background-color: #EEEBE8;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Text = styled.h1`
    font-family: 'Actor';
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
`

const Products = styled.div``

const Product = styled.div`
    width: 340px;
    height: 68px;
    background-color: #EEEBE8;

    display: flex;
    align-items: center;

    img{
        width: 68px;
        margin-right: 10px;
    }
`

const Info = styled.div`
    height: 100%;
    margin-top: 6px;
    margin-bottom: 6px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
`

const Name = styled.h2`
    font-family: 'Actor';
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #252522;
`

const Quantity = styled.h3`
    font-family: 'Actor';
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #252522;
`

const Price = styled.h3`
    font-family: 'Actor';
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #1B7138;
`

const Line = styled.div`
    width: 100%;
    margin: 18px;

    border: 1px solid #000000;
`

const Total = styled.div`
    width: 100%;
    margin-bottom: 44px;
    
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    width: 235px;
    height: 45px;
    background-color: #1B7138;
    border: none;
    border-radius: 24px;
    cursor: pointer;

    font-family: 'Actor';
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
`

export {
    Container,
    Text,
    Products, 
    Product, 
    Info,
    Name,
    Quantity,
    Price,
    Line,
    Total,
    Button
}