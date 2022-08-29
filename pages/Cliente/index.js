import HeaderPageCliente from '../../components/HeaderPageCliente';
import TabelaCliente from '../../components/TabelaClientes';
import { useGlobal } from '../../hooks/useGlobal';
import { useEffect } from 'react';

export default function ClientePage() {
  const { setHeaderText,goTo } = useGlobal();

  useEffect(() => {
    goTo(1);
    setHeaderText(2);
  }, []);

  return (
      <>
        <HeaderPageCliente />
        <TabelaCliente />
      </>
  );
}
