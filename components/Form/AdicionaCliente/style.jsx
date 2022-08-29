import styled from "@emotion/styled";
const fontSize = 22;

const Text = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: ${fontSize}px;
    line-height: 130%;

    color: #3F3F55;
`
const Titulo = styled.div`
    display: flex;
    align-items: center;
`

const Imagem = styled.img`
    height: ${fontSize+5}px;
`

export default { Text, Imagem, Titulo };