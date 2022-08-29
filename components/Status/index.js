import React from 'react'
import status from '../../util/status'

function Status({ statusIndex, cobranca }) {
  const statusCliente = !cobranca ? status.getStatus(statusIndex) : status.getStatusCobranca(statusIndex);
  const style = {
    ...statusCliente.style,
    width: "min-content",
    padding: ".3rem 1rem",
    borderRadius: "8px",
    whiteSpace: "nowrap",
    textTransform: "capitalize",
  }

  return (
    <span style={style} >{statusCliente.nome}</span>
  );
};

export default Status;