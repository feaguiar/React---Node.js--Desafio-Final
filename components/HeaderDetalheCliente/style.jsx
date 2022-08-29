import styled from "@emotion/styled";

const Titulo = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 1.8vw;
    line-height: 130%;
    

    color: #3F3F55;
    text-transform: capitalize;
`

const Imagem = styled.img`
    width: calc(1.8vw * 1.23);
`

function TituloEIcone({ icon, alt, text }) {
    return (
        <>
            <Imagem src={icon} alt={alt}/>
            <Titulo >{text}</Titulo>
        </>
    )
}


export default { TituloEIcone };