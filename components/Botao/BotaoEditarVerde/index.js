import styled from '@emotion/styled'
import { Button } from '@material-ui/core'
import React from 'react'
import IconCaneta from '../../../assets/iconCaneta.svg'

const Text = styled.p`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 25px;
    padding-inline: 20px;
`

function BotaoEditarVerde({ text, ...rest }) {
    return (
        <Button
            style={{
                background: "#F8F8F9",
                borderRadius: "10px",
                color: "#0E8750",
                flexGrow: 1
            }}
            {...rest}
        >
            <Text>
                <img src={IconCaneta} />
                {text}</Text>
        </Button>
    )
}

export default BotaoEditarVerde;