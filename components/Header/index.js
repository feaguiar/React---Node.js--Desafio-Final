import { Container, ContainerPerfil, Nome } from './styles';
import Seta from '../../assets/setaDown.svg'
import styled from '@emotion/styled';
import CardMenu from '../CardMenu';
import useWindow from '../../hooks/windowSet';
import EditaUsuario from '../Form/EditaUsuario';
import Modal from '../Modal';
import { useGlobal } from '../../hooks/useGlobal';
import { Breadcrumbs, Link } from '@mui/material';

const Titulo = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 130%;

    display: flex;
    align-items: center;
    text-align: center;

    color: #343447;
    position: absolute;

    bottom: 0;
    left: 0;
`

const Perfil = styled.div`
    background: #DEDEE9;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LinkStyled = styled(Link)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #0E8750;
    text-transform: capitalize;
`

const TextEstouAqui = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

color: #00000090;
text-transform: capitalize;
`
const Historia = styled(Breadcrumbs)`
    position: absolute;

    bottom: 0;
    left: 0;
`


function Header() {
    const [
        open,
        onClose,
        onOpen
    ] = useWindow();
    const [openModal, onCloseModal, onOpenModal] = useWindow();
    const { headerText, usuario } = useGlobal();
    const nome = usuario?.nome ?? JSON.parse(localStorage.getItem("usuario"))?.nome;
    return (

        <Container>
            {(() => {
                switch (headerText) {

                    case 1:

                        return (
                            <Historia separator=">">
                                <LinkStyled href="/cliente" underline='none'>cliente</LinkStyled>
                                <TextEstouAqui >detalhes do cliente</TextEstouAqui>
                            </Historia>
                        )
                    case 2:
                        return (
                            <Historia separator=">">
                                <LinkStyled href="#" underline='none'>Clientes</LinkStyled>
                            </Historia>
                        )
                    case 3:
                        return (
                            <Historia separator=">">
                                <LinkStyled href="#" underline='none'>Cobranças</LinkStyled>
                            </Historia>
                        )
                    default:
                        
                        return (

                            <Titulo >
                                {headerText}
                            </Titulo>
                        )

                }

            })()
            }
            <ContainerPerfil>
                <Perfil >
                    <Nome text={
                        nome ? nome.split(" ").reduce((iniciais, nome) => (iniciais + nome[0].toUpperCase()), "") : " "
                    }

                    />
                </Perfil>
                <Nome text={nome} />
                <img src={Seta} alt='seta' style={{ cursor: "pointer" }} onClick={() => {
                    if (open) onClose()
                    else onOpen()
                }} />
                {open && <CardMenu onOpen={onOpenModal} />}

                {openModal && <Modal close={onCloseModal}>
                    <EditaUsuario onClose={onCloseModal} />
                </Modal>

                }
            </ContainerPerfil>

        </Container>
    )
}

export default Header;