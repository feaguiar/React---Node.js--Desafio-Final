import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { useGlobal } from '../../hooks/useGlobal';
import useCliente from '../../hooks/useCliente';
import api from '../../services/api';

import HeaderDetalheCliente from '../../components/HeaderDetalheCliente';
import CardDetalheCliente from '../../components/CardDetalheCliente';
import CardCobrancaCliente from '../../components/CardCobrancasCliente';

export default function DetalheClientePage() {
  const { token, setHeaderText } = useGlobal();
  const [cliente, setCliente] = useState({});
  const { clientes } = useCliente();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderText(1);
    
    const index = id-1;
    /* const aux = clientes[id]; */
    const aux = clientes[index];

    if (!!aux)
      return setCliente(aux);

    navigate("/404");

    /* const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try {
      const DetalharCliente = async () => {
        return await api.get(`/clientes/${id}`, config);
      };

      DetalharCliente().then(({ data }) => {
        setCliente({ ...data });
      });
    } catch (e) {
      console.error("erro>", e);
      setCliente({});
      navigate("/404");
    } */
  }, []);

  return (
    <Box style={{ marginTop: "1vw" }}>
      <HeaderDetalheCliente nome={cliente.nome} />

      <CardDetalheCliente {...cliente} />

      <CardCobrancaCliente />
    </Box>
  );
};
