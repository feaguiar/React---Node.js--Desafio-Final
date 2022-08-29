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

function BotaoRosa({ text, Icon, pd, flexGrow,...rest }) {
    return (
        <Button
            style={{
                background: "#DA0175",
                borderRadius: "10px",
                color: "rgb(248, 248, 249)",
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

export default BotaoRosa;