import styled from "@emotion/styled";

const Container = styled.header`
    color: #343447;
    height: 10vh;
    display: flex;
    justify-content: end;
    align-items: center;
    border-bottom: 1px solid #ACD9C5;

    position: relative;
`

const ContainerPerfil = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    position: relative;
`

const Seta = styled.div`
    height: 20px;
    width: 20px;
`
const NomeTexto = styled.span`
font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;

color: #0E8750;
text-transform: capitalize;
`
function Nome({text=""}) {
    
    const primeiroNome = text.split(" ")[0];
    return(
        <NomeTexto>{primeiroNome}</NomeTexto>
    )
}
export {
    Container,
    ContainerPerfil,
    Nome
}