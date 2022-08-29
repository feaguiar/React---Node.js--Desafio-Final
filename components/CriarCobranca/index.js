import styled from '@emotion/styled';

import useWindow from '../../hooks/windowSet';
import { useGlobal } from '../../hooks/useGlobal';

import Modal from '../Modal';
import CobrancaForm from '../Form/AdicionaCobranca';

import icon from './../../assets/iconCriarCobranca.svg';

const Text = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 11px;
  color: #DA0175;
`;

function CriarCobranca({ clienteInfos }) {
  const { setClienteSelecionado } = useGlobal();
  const [
    open,
    onClose,
    onOpen
  ] = useWindow();

  function pegarInfoCliente() {
    setClienteSelecionado({ 
      id: clienteInfos.id,
      nome: clienteInfos.nome,
    });
    onOpen();
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          width: 'min-content',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        /* onClick={onOpen} */
        onClick={() => pegarInfoCliente()}
      >
        <img src={icon} alt='icon cobrança' />
        <Text>cobrança</Text>
      </div>

      {open &&
        <Modal close={onClose} >
          <CobrancaForm onClose={onClose} />
        </Modal>
      }
    </>
  );
};

export default CriarCobranca;