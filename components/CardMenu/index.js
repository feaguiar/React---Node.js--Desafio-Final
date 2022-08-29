import styled from '@emotion/styled'
import {  Edit, Output } from '@mui/icons-material'
import React from 'react'
import { useGlobal } from '../../hooks/useGlobal'


const ButtonMenu = styled.div`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 11px;

    text-transform: capitalize;
    color: #747488;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    background-color: #fff;

    display: flex;
    gap: 16px;
    position: absolute;
    right: -15px;
    bottom: -15px;
    border-radius: 8px;
    transform: translate(50%,50%);
    padding: 10px 15px;
    box-shadow: 0 0 1.2rem #74748857;


    &::before {
        content: "";
        position: absolute;
        border-radius: .1rem;
        background-color: #fff;
        width: 15px;
        height: 15px;
        transform: translateX(-2px) translateY(-15px) rotate(45deg);
    }
`
function CardMenu({onOpen}) {
  const { removeToken } = useGlobal();
  
  return (
    <Container>
        <ButtonMenu
            onClick={onOpen}
        >
            <Edit fontSize='small'/>
            edit
        </ButtonMenu>
        <ButtonMenu
            onClick={ ()=> removeToken() }
        >
            <Output fontSize='small'/>
            sair
        </ButtonMenu>

    </Container>
  )
}

export default CardMenu