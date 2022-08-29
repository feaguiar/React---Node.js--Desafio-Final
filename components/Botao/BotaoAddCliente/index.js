import { useState, useEffect } from 'react';
import useWindow from '../../../hooks/windowSet';
import BotaoRosa from '../BotaoRosa';
import ClienteForm from '../../Form/AdicionaCliente';
import Modal from '../../Modal';
import { Alert, Snackbar } from '@mui/material';
import { Add } from '@mui/icons-material';
import useQuery from '../../../hooks/useQuery';


function BotaoAddCliente() {
  const [id, setId] = useState(null);
 
  const query = useQuery();

  const [
    open,
    onClose,
    onOpen
  ] = useWindow();
  const [
    openAlert,
    onCloseAlert,
    onOpenAlert
  ] = useWindow();

  const [mensagem, setMensagem] = useState('ola');
  const [type, setType] = useState('info');

  function mensagemAlert(msg, type) {
    setMensagem(msg);
    setType(type);
  };

  useEffect(()=>{
    const idClienteAlterar = query.get('id');

    if( idClienteAlterar ){
      setId( idClienteAlterar );
      onOpen();
    }
  },[]);

  return (
    <div>
      <BotaoRosa Icon={Add} text='adicionar cliente' 
      onClick={()=>{
        onOpen()
        setId(null); 
      }} />

      {open &&
        <Modal close={onClose} >
          <ClienteForm setOpenAlert={onOpenAlert} id={id} mensagem={mensagemAlert} onClose={onClose} />
        </Modal>
      }

      <Snackbar open={openAlert} onClose={onCloseAlert} autoHideDuration='5000' anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <Alert severity={type} onClose={onCloseAlert}
          sx={{ width: '100%', fontFamily: 'nunito' }} >{mensagem}</Alert>
      </Snackbar>
    </div>
  );
};

export default BotaoAddCliente;