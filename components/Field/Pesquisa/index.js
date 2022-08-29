import styled from '@emotion/styled';
import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';

import useCliente from '../../../hooks/useCliente';
import pesquisaIcon from './../../../assets/iconPesquisa.svg';

const InputPesquisaCliente = styled.input`
  all: unset;
  padding: 7px 8px;
  background: #FFFFFF;
  border-radius: 10px;
`;

const Image = styled.img`
  position: absolute;
  right: 5px;
  transform: translate(0,-50%);
  top: 50%;
`;

function PesquisaCliente() {
  const { clientes, setCurrentClientes } = useCliente();

  useEffect(() => {
    setCurrentClientes( [...clientes]);
  }, [clientes]);


  function search({ target }) {
    const chaveBusca = target.value;

    if (chaveBusca.trim() === '') {
      setCurrentClientes(clientes);
      return;
    }

    const resultado = clientes.filter(({ nome }) => {
      return nome.toUpperCase().includes(chaveBusca.toUpperCase());
    });

    setCurrentClientes([...resultado]);
  };

  return (
    <Box style={{ position: 'relative', boxShadow: '4px 4px 4px rgba(218, 1, 117, .05)' }}>
      <InputPesquisaCliente type='text' placeholder='Pesquisa' onChange={search} />

      <Image src={pesquisaIcon} alt='icon pesquisa' />
    </Box>
  );
};

export default PesquisaCliente;