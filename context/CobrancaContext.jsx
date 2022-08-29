import { createContext } from 'react';
import { useCobrancaValues } from '../hooks/useCobrancaValues';

export const CobrancaContext = createContext({});

export function CobrancaProvider(props) {
  const cobrancaValues = useCobrancaValues();

  return (
    <CobrancaContext.Provider value={cobrancaValues} >
      {props.children}
    </CobrancaContext.Provider>
  );
};
