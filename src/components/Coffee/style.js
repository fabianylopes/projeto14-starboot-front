import styled from "styled-components";

const ImageContainer = styled.section`
    width: 100vw;
    height: 411px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductImage = styled.img`
    width: 100%;
    height: calc(411px - 45px);
    object-fit: cover;
`

const LargeButton = styled.button`
    width: 100%;
    height: 60px;
    background: ${props => props.unavailable ? 'orange' : 'rgba(27, 113, 56, 1)'};
    color: white; 
    border: none;
    font-size: medium;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`

const ProductHeader = styled.section`
    width: 100vw;
    height: 200px;
    background-color: rgba(238, 235, 232, 1);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Subtitle = styled.h2`
    color: rgba(37, 37, 34, 1);
    font-size: large;
    padding:0 20px;
    text-align: center;
    color: rgba(27, 113, 56, 1);
`

const GoesWellWithSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const SubSubtitle = styled.h3`
    color: rgba(37, 37, 34, 1);
    font-size: medium;
    padding:0 20px;
    text-align: center;
    font-weight: 700;
`

const Paragraph = styled.p`
    color: rgba(37, 37, 34, 1);
    font-size: large;
    padding:0 20px;
    text-align: center;
`

const LongText = styled.span`
    color: rgba(37, 37, 34, 1);
    font-size: large;
    margin: 20px;
    padding:0 40px;
    text-align: center;
    white-space: pre-line;
`

const DescriptionSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.justify_content ? props.justify_content:'center'};
    width: 100vw;
    height: ${props => props.height};
    background-color: ${props => props.background_Color};
`

export{Container, ImageContainer, ProductImage, LargeButton, ProductHeader, Subtitle, GoesWellWithSection, SubSubtitle, Paragraph, DescriptionSection, LongText}