import styled from 'styled-components';

const Banner = styled.div`
    width: 375px;
    height: 422px;

    img{
        width: 375px;
    }
`

const Container = styled.div`

`

const Title = styled.h1`
    font-family: 'SoDo Sans';
    font-weight: 600;
    font-size: 33px;
    line-height: 41px;
    text-align: center;
    color: #252522;
`

const Text = styled.h2`
    font-family: 'Actor';
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #252522;
`

const H2 = styled.h2`
    font-family: 'Actor';
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #252522;
`

const Items = styled.div`
    padding-right: 35px;
    padding-left: 35px;

    display: flex;
    flex-wrap: wrap;
    gap: 50px;
`

const Item = styled.div`
    width: 124px;
    height: 212px;

    display: flex;
    flex-direction: column;

    img {
        width: 124px;
    }
`

const Name = styled.h2`
    font-family: 'Actor';
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #03A12D;
`

const Description = styled.div`
    display: flex;
    justify-content: space-between;
`

const Type = styled.h3`
    font-family: 'Actor';
    font-weight: 400;
    font-size: 7px;
    line-height: 8px;
    text-align: center;
    color: #000000;
`

const Price = styled.h3`
    font-family: 'Actor';
    font-weight: 400;
    font-size: 7px;
    line-height: 8px;
    text-align: center;
    color: #000000;
`

const KnowMoreButton = styled.button`
    width: 98px;
    height: 16px;
    background-color: #7A502C;
    border-radius: 1px;
    border: none;
    cursor: pointer;

    font-family: 'Actor';
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    color: #FFFFFF;
`

const AddButton = styled.button`
    width: 98px;
    height: 16px;
    background-color: #1B7138;
    border-radius: 1px;
    border: none;
    cursor: pointer;

    font-family: 'Actor';
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    color: #FFFFFF;
`

export {
    Banner, 
    Container, 
    Title, 
    Text, 
    H2, 
    Item, 
    Items, 
    Name, 
    Description, 
    Type, 
    Price, 
    KnowMoreButton, 
    AddButton
}