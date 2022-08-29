import React, { useState } from 'react'
import useWindow from '../../../hooks/windowSet';
import BotaoEditarVerde from '../BotaoEditarVerde';
import ClienteFormEditar from '../../Form/EditarClienteModal';
import Modal from '../../Modal';
import { Alert, Snackbar } from '@mui/material';

function BotaoEditarCliente() {
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

  const [mensagem, setMensagem] = useState("ola");
  const [type, setType] = useState("info");

  function mensagemAlert(msg, type) {
    setMensagem(msg);
    setType(type);
  }

  return (
    <div>
      <BotaoEditarVerde text="Editar Cliente" onClick={onOpen} />
      {open &&
        <Modal close={onClose} >
          <ClienteFormEditar setOpenAlert={onOpenAlert} mensagem={mensagemAlert} onClose={onClose} />
        </Modal>
      }
      <Snackbar open={openAlert} onClose={onCloseAlert} autoHideDuration="5000" anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        <Alert severity={type} onClose={onCloseAlert}
          sx={{ width: "100%", fontFamily: "nunito" }} >{mensagem}</Alert>
      </Snackbar>
    </div>

  )
}

export default BotaoEditarCliente