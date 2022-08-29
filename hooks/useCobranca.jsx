import { useContext } from 'react';

import { CobrancaContext } from '../context/CobrancaContext';

export function useCobranca(){
    return useContext(CobrancaContext);   
};
