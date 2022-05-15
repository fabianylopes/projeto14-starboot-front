import { useNavigate } from 'react-router';

import { Box, H1, H2, SuccessButton } from './style';

function Success() {
    const navigate = useNavigate();

  return (
    <Box>
        <div>
            <H1>SUCESSO</H1>
            <H2>NUMERO DO PEDIDO: </H2>
        </div>
        <SuccessButton onClick={() => navigate('/coffees')}>VOLTAR A COMPRAR</SuccessButton>
    </Box>
  );
}

export default Success;
