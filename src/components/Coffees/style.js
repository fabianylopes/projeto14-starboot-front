import styled from 'styled-components';

const Banner = styled.div`
    width: 375px;
    height: 422px;
    background-color: #EEEBE8;
    padding-bottom: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        width: 375px;
    }
`

const Container = styled.div`
    padding: 18px 30px;
`

const Title = styled.h1`
    font-family: 'Actor';
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
    padding-top: 15px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
`

const Item = styled.div`
    width: 124px;
    height: 212px;
    padding: 0px 12px 10px 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
    width: 100%;
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
    background: ${props => props.unavailable ? 'orange' : 'rgba(27, 113, 56, 1)'};
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