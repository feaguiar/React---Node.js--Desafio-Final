import { useLocalStorage } from 'react-use';
import { useState } from 'react' ;

export function useGlobalProvider() {
  const [usuario, setUsuario, removeUsuario] = useLocalStorage('usuario', '');
  const [token, setToken, removeToken] = useLocalStorage('token', '');
  const [clienteSelecionado, setClienteSelecionado, removeClienteSelecionado] = useLocalStorage('clienteSelecionado', { id: null, nome: '' });
  const [alturaPosicao, setAlturaPosicao] = useState("5vh");
  const [headerText, setHeaderText] = useState(0);
  const paddingTop = "5vh";
  const gap = "8vh"
  const lateralRetanguloDimensoes = { w: "3px", h: "70px" }
  function goTo(pos){
    setAlturaPosicao(`calc(${paddingTop} + ${pos}*${gap} + ${pos}*${lateralRetanguloDimensoes.h}) `);
  }
  
   return {
    clienteSelecionado, 
    setClienteSelecionado, 
    removeClienteSelecionado,
    usuario,
    setUsuario,
    removeUsuario,
    token,
    setToken,
    removeToken,
    headerText,
    setHeaderText,
    alturaPosicao,
    setAlturaPosicao,
    gap, lateralRetanguloDimensoes, paddingTop,
    goTo
  };
};
