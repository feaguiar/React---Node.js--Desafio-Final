import styled from '@emotion/styled';
import { Add } from '@mui/icons-material';

import useWindow from '../../hooks/windowSet';

import BotaoRosa from '../Botao/BotaoRosa';
import HStack from '../Hstack';
import TabelaCobrancaCliente from '../TabelaCobrancaCliente';
import Modal from '../Modal';
import CobrancaForm from '../Form/AdicionaCobranca';

const Titulo = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: calc(18px / 1440px);
  line-height: 130%;
  color: #3F3F55;
`;

const Container = styled.div`
  margin-top: 2.7vh;
  background: #FFFFFF;
  border-radius: 30px;
  padding: 3.35vh 1.7vw;
`;

function CardCobrancaCliente() {
  const [
    open,
    onClose,
    onOpen
  ] = useWindow();

  return (
    <Container>
      <HStack style={{ alignItems: "center", marginBottom: "3vh" }}>
        <Titulo>Cobranças do Cliente</Titulo>
        <BotaoRosa Icon={Add} text={`Nova Cobrança`} flexGrow={0} pd="30px" onClick={onOpen} />
      </HStack>

      <TabelaCobrancaCliente />

      {open &&
        <Modal close={onClose} >
          <CobrancaForm onClose={onClose} />
        </Modal>
      }
    </Container>
  );
};

export default CardCobrancaCliente;