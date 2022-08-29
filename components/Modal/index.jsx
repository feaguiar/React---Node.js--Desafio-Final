import { Box } from '@material-ui/system';
import { useState } from 'react';
import fechar from './../../assets/iconClose.svg'

function Modal({ close, children }) {
  const [closed, setClosed] = useState(false);
  const style = {
    background: '#FFFFFF',
    borderRadius: '30px',
    cursor: 'pointer',
  };

  return (
    <Box className='modal' >
      <Box style={style} className={`modal-main VStack ${closed ? 'saida' : 'entrada'}`}>
        {children}
        <Box
          className='close'
          onClick={() => {
            setClosed(state => {
              setTimeout(close, 800);
              return true;
            });
          }}
          style={{ cursor: 'pointer', }}
        >
          <Box width='min-content'>
            <img src={fechar} alt='botao fechar' />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;