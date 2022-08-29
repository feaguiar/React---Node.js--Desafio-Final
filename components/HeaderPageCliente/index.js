import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@material-ui/system'
import clienteIcon from "./../../assets/iconCliente.svg"
import filterIcon from "./../../assets/iconFiltro.svg"

import PesquisaCliente from '../Field/Pesquisa'
import BotaoAddCliente from '../Botao/BotaoAddCliente'


const Text = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 130%;

    color: #3F3F55;
`

function HeaderPageCliente() {
    return (
        <Box margin="25px 0 25px 0"
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
            }}
        >
            <Box style={{ display: "flex", alignItems: "center", width: "min-content" }}>
                <img src={clienteIcon} alt="client icon" height="26px" />
                <Text> Clientes </Text>
            </Box>

            <Box
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px"
                }}
            >
                <BotaoAddCliente />
                <Box>
                    <img src={filterIcon} alt='filter' />
                </Box>
                <PesquisaCliente />
            </Box>
        </Box>
    )
}

export default HeaderPageCliente