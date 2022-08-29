import React from 'react'
import HStack from '../Hstack'
import Style from "./style"
import clienteIcon from "./../../assets/iconCliente.svg"

function HeaderDetalheCliente({nome}) {
    
  return (
      <HStack justify="flex-start" gap="16px" style={{alignItems:"center"}} >
        <Style.TituloEIcone icon={clienteIcon} alt="icone cliente" text={nome} size={26} />
    </HStack>
  )
}

export default HeaderDetalheCliente