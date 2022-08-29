import { Box } from '@material-ui/system'
import React, { useEffect, useState } from 'react'
import ItemMenuLateral from '../ItemMenu';
import home from "./../../assets/iconHome.svg"
import cliente from "./../../assets/iconCliente.svg"
import { useNavigate } from "react-router-dom"
import cobranca from './../../assets/iconCobranca.svg';
import { useGlobal } from '../../hooks/useGlobal';

function MenuLateral() {
  const {alturaPosicao, setAlturaPosicao, gap, lateralRetanguloDimensoes, paddingTop} = useGlobal();
  const [itens, setItens] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setItens([
      {
        imagem: home,
        nome: "home",
        link: "/home"
      },
      {
        imagem: cliente,
        nome: "cliente",
        link: "/cliente",
      },
      {
        imagem: cobranca,
        nome: "cobrança",
        link: "/cobranca",
      }
    ])
  }, [])
  return (
    <Box style={{ position: 'sticky', top: 0, zIndex: 2000 }} sx={{ display: "flex", paddingTop, gap, flexDirection: "column", bgcolor: "#F0F0F5", height: "100vh", width: "7.5vw" }}>

      {
        itens.map((item, index) => {
          return <ItemMenuLateral key={index} {...item}
            onClick={() => {
              setAlturaPosicao(`calc(${paddingTop} + ${index}*${gap} + ${index}*${lateralRetanguloDimensoes.h}) `);
              navigate(item.link);
            }}
          />
        })
      }

      <div style={{ position: "absolute", zIndex: "2001", transition: ".3s", right: -1, top: alturaPosicao, background: "#DA0175", height: lateralRetanguloDimensoes.h, width: lateralRetanguloDimensoes.w }} />
    </Box>
  )
}

export default MenuLateral;