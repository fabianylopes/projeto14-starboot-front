import React from 'react'
import styled from 'styled-components';

function CostumerData() {
  return (
    <Container>
        <Text>SERÁ ENVIADO PARA:</Text>
        <Text></Text>
        <Text>Previsão de entrega: </Text>
    </Container>
  )
}

export default CostumerData;

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