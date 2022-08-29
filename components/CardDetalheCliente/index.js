import styled from '@emotion/styled';
import { Edit } from '@mui/icons-material';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import BotaoVerde from '../Botao/BotaoVerde';
import HStack from '../Hstack';

const Titulo = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: calc(18px / 1440px);
  line-height: 130%;

  color: #3F3F55;
`;

const Container = styled.div`
  margin-top: 2vh;
  background: #FFFFFF;
  border-radius: 30px;
  padding: 3.35vh 1.7vw;
`;

const Propriedade = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 1.1vw;
  line-height: 24px;

  color: #3F3F55;

  text-transform: capitalize;
`;
const Box = styled.div`
  grid-column-start: ${(props) => props.colomn};
  grid-column-end: ${(props) => props.colomnEnd};
  grid-row-start: ${(props) => props.row};
  grid-row-end: ${(props) => props.rowEnd};
`

const Valor = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 1.1vw;
  line-height: 24px;
  text-transform: ${({ textTranform }) => textTranform ? textTranform : 'none'};
  color: #3F3F55;
  white-space: nowrap;
`;

const ContainerValues = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 3.3vh;
  row-gap: 3vh;
  column-gap: 3vh;
  justify-content: space-between;
`;

function CardDetalheCliente({ id, email, telefone, cpf, logradouro, bairro, complemento, cep, cidade, estado }) {
  const navigate = useNavigate(); 
  console.log(id);
  return (
    <Container>
      <HStack style={{ alignItems: 'center' }}>
        <Titulo>Dados do cliente</Titulo>
        <BotaoVerde Icon={Edit} text={`editar cliente`} flexGrow={0} pd='35px'
          onClick={() => {
            console.log(id);
            navigate(`/cliente?id=${id}`) 
          }} />
      </HStack>

      <ContainerValues >
        <Box>
          <Propriedade>Email</Propriedade>
          <Valor>{email}</Valor>
        </Box>
        <Box>
          <Propriedade>telefone</Propriedade>
          <Valor>{telefone}</Valor>
        </Box>
        <Box>
          <Propriedade>CPF</Propriedade>
          <Valor>{cpf}</Valor>
        </Box>

        <Box colomn={1} row={2}>
          <Propriedade >endereço</Propriedade>
          <Valor textTranform='capitalize'>{logradouro}</Valor>
        </Box>
        <Box colomn={2} row={2}>
          <Propriedade>bairro</Propriedade>
          <Valor textTranform='capitalize'>{bairro}</Valor>
        </Box>
        <Box colomn={3} row={2}>
          <Propriedade>complementos</Propriedade>
          <Valor textTranform='capitalize'>{complemento}</Valor>
        </Box>

        <Box colomn={4} row={2}>
          <Propriedade>CEP</Propriedade>
          <Valor>{cep}</Valor>
        </Box>
        <Box colomn={5} row={2}>
          <Propriedade>cidade</Propriedade>
          <Valor textTranform='capitalize'>{cidade}</Valor>
        </Box>
        <Box colomn={6} row={2}>
          <Propriedade>UF</Propriedade>
          <Valor textTranform='uppercase'>{estado}</Valor>
        </Box>
      </ContainerValues>
    </Container>
  );
};

export default CardDetalheCliente;