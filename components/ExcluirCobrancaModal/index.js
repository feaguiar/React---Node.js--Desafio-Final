import { useGlobal } from './../../hooks/useGlobal';
import { useCobranca } from '../../hooks/useCobranca';
import api from '../../services/api';

import { errorMessage, successMessage } from '../../util/toast';

import './styles.css';
import IconX from '../../assets/iconClose.svg';
import triangulo from '../../assets/triangulo.svg';

function ModalIdCobranca({ setOpenDelete }) {
  const { token } = useGlobal();
  const { cobrancas, setCobrancas, idCobranca, setIdCobranca } = useCobranca();

  function handleClose() {
    setOpenDelete(false);
  };

  async function confirmarExclusaoCobranca() {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try {
      const ApagarCobranca = async () => {
        return await api.delete(`cobrancas/${idCobranca}`, config);
      };

      ApagarCobranca().then(({ data: mensagem }) => {
        successMessage(mensagem);
      });

      const novasCobrancas = cobrancas.filter(item => {
        return item.id !== idCobranca;
      });
      
      setCobrancas([ ...novasCobrancas ]);
      setOpenDelete(false);
    }
    catch (e) {
      console.error('erro>', e);
      errorMessage(e.response.data);
      setOpenDelete(false);
    }
  };

  return (
    <div className='backdrop'>
      <div className='modalExcluirId'>
        <img src={IconX}
          className='iconX'
          alt='icon'
          onClick={handleClose} />
        <img className='icon-triangulo' src={triangulo} alt='icon triangulo' />
        <h3 className='titulo-confirmacao'>Tem certeza que deseja excluir esta cobrança?</h3>
        <div className='btn-confirmacao'>
          <button
            className='btn-vermelho'
            onClick={handleClose}
          >Não
          </button>
          <button
            className='btn-verde'
            onClick={confirmarExclusaoCobranca}
          >Sim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalIdCobranca;