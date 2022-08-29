import { useState } from 'react';

export function useClienteValues() {
  const [clientes, setClientes] = useState([]);
  const [currentClientes, setCurrentClientes] = useState([]);

  return {
    clientes,
    setClientes,
    currentClientes,
    setCurrentClientes,
  };
};
