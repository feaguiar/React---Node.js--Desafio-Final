import styled from '@emotion/styled'
import { Button } from '@material-ui/core'
import React from 'react'

const Text = styled.p`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 25px;
    padding-inline: 20px;
`

function BotaoVerde({ text, Icon, pd, flexGrow,...rest }) {
    return (
        <Button
            style={{
                background: "#F8F8F9",
                border: "1px solid #DEDEE9",
                borderRadius: "10px",
                color: "#0E8750",
                paddingInline: pd,
                flexGrow: flexGrow ?? 1,
                fontSize: "16px",
            }}
            {...rest}
        >
            { Icon ? <span 
                style={{ 
                        display: "grid",
                        gridTemplateColumns: ".1fr 1fr",
                    }}
            >
                <Icon style={{ fontSize:"20px" }}/>
                <Text>{text}</Text>
            </span>
            :
            <span>
                <Text>{text}</Text>
            </span>
            }
        </Button>
    )
}

export default BotaoVerde;