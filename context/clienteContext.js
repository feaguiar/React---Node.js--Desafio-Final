import { createContext } from 'react';
import { useClienteValues } from '../hooks/useClienteValues';

const userContext = createContext({});

export function Provider(props) {
    const values = useClienteValues();

    return (
        <userContext.Provider value={values} >{props.children}</userContext.Provider>
    )
}

export default userContext;