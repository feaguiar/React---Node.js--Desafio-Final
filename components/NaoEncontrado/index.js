import styled from '@emotion/styled';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import lupa from './../../assets/lupa.svg';

const Container = styled.td`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;;
  height: 60vh;    
`;

const Image = styled.img`
  width: 30vw;
  height: 40vh;
`;

const Detail = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #9B9BB2;
`;

const Text = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  text-align: center;;
  color: #F08889;
`;

function NaoEncontrado() {
  return (
    <Container>
      <Image src={lupa} alt='lupa' />
      <Text>Nenhum resultado foi encontrado!</Text>
      <Detail>Verifique se escrita está correta</Detail>
    </Container>
  );
};

export default NaoEncontrado;