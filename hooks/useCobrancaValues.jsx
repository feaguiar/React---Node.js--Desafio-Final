import { useState } from 'react';

export function useCobrancaValues() {
  const [cobrancas, setCobrancas] = useState([]);
  const [idCobranca, setIdCobranca] = useState(null);

  return {
    cobrancas,
    setCobrancas,
    idCobranca, 
    setIdCobranca,
  };
};
