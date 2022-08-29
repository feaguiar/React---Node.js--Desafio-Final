import {
  formatToLocaleCurrency,
  formatToLocaleDate
} from '../../util/formats';
import { selecionarStatus } from '../../helper/tratarStatusCobranca';

import Status from '../Status';

import './styles.css';
import IconX from '../../assets/iconClose.svg'
import iconCobranca from '../../assets/iconCobranca.svg'

function DetalhesCobranca({ setOpenDetalhes, textModal }) {
  function handleCloseDetalhes() {
    setOpenDetalhes(false);
  };

  return (
    <div className='backdrop'>
      <div className='container-detalhes'>

        <img src={IconX}
          className='iconX'
          alt='icon x'
          onClick={handleCloseDetalhes}
        />

        <div className='container-detalhes-titulo'>
          <img src={iconCobranca}
            className='icon-cobranca'
            alt='icon'
          />
          <h2>Detalhe da Cobrança</h2>
        </div>

        <div className='colum'>
          <span>Nome</span>
          <span>{textModal.nome}</span>
        </div>
        <div className='colum'>
          <span>Descrição</span>
          <span>{textModal.descricao}</span>
        </div>

        <div className='container-detalhes-venc'>
          <div className='colum'>
            <span>Vencimento</span>
            <span>{formatToLocaleDate(textModal.vencimento)}</span>
          </div>
          <div className='colum'>
            <span>Valor</span>
            <span>{formatToLocaleCurrency(textModal.valor)}</span>
          </div>
        </div>

        <div className='container-detalhes-id'>
          <div className='colum'>
            <span>Id Cobranças</span>
            <span>{textModal.id}</span>
          </div>
          <div className='colum'>
            <span>Status</span>
            <Status statusIndex={selecionarStatus(textModal.status, textModal.vencimento)} cobranca={true} />
          </div>
        </div>
      </div>
    </div >
  );
};

export default DetalhesCobranca;
