import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import CODE from '../../../helper/codes';
import useError from '../../../hooks/useError';
import { useGlobal } from '../../../hooks/useGlobal';
import api from '../../../services/api';
import BotaoRosa from '../../Botao/BotaoRosa';
import BotaoVerde from '../../Botao/BotaoVerde';
import { ConfirmacaoAlterado } from '../../ConfirmacaoAlterado';
import { ConfirmacaoCadastro } from '../../ConfirmacaoCadastro';
import Field from '../../Field'
import HStack from '../../Hstack'
import Form from '../FormBasic/style';

const Titulo = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    /* or 31px */

    display: flex;
    align-items: center;
    text-align: center;

    /* Cinzas/Cinza 1 */
    text-align: center;
    color: #343447;
`

function EditaUsuario({ onClose }) {
    const [register, setRegister] = useState({});
    const { token, usuario, setUsuario } = useGlobal();
    const [alterado, setAlterado] = useState(false);
    const [
        ErrorNome,
        mensagemErrorNome,
        isValidNome,
        setMensagemNome
    ] = useError();

    const [
        ErrorSenha,
        mensagemErrorSenha,
        isValidSenha,
        setMensagemSenha
    ] = useError();

    const [
        ErrorConfirmar,
        mensagemErrorConfirmar,
        isValidConfirmar,
        setMensagemConfirmar
    ] = useError();
    const [
        ErrorTelefone,
        mensagemErrorTelefone,
        isValidTelefone,
        setMensagemTelefone
    ] = useError();

    const [
        ErrorCPF,
        mensagemErrorCPF,
        isValidCPF,
        setMensagemCPF
    ] = useError();

    const [
        ErrorEmail,
        mensagemErrorEmail,
        isValidEmail,
        setMensagemEmail
    ] = useError();

    function handleState({ target }) {
        const { name, value } = target;

        setRegister({ ...register, ...{ [name]: value } })
    }

    async function submit(e) {
        e.preventDefault();

        isValidNome();
        isValidConfirmar();
        isValidSenha();
        isValidEmail();
        isValidTelefone();
        isValidCPF();
        let testeErro = false;

        if (!register.nome.trim()) {
            testeErro = true;
            setMensagemNome("Este campo deve ser preenchido");
        }
        else if (register.nome.trim().split(" ").length < 2) {
            testeErro = true;
            setMensagemNome("nome e sobrenome(\"minimo\")");
        }

        if (register.email && !register.email.trim()) {
            testeErro = true;
            setMensagemEmail("Este campo deve ser preenchido");
        }


        if (register.novasenha?.length && !register.senha?.trim()) {
            testeErro = true;
            setMensagemSenha("Este campo deve ser preenchido");
        }

        if (register.senha?.length && !register.novasenha?.trim()) {
            testeErro = true;
            setMensagemConfirmar("Este campo deve ser preenchido");
        }

        if (register.senha !== register.novasenha) {
            testeErro = true;
            setMensagemConfirmar("As senhas não coincidem");
        }
        // verificações de telefone
        if (register.telefone && register.telefone.includes("_")) {
            testeErro = true;
            setMensagemTelefone("Este campo deve ser preenchido");
        }
        // verificações de cpf
        if (register.cpf && register.cpf.includes("_")) {
            testeErro = true;
            setMensagemCPF("Este campo deve ser preenchido");
        }

        console.log(testeErro);
        if (testeErro)
            return;

        const { novasenha: _, ...dados } = {
            ...register,
            ...(register.telefone && { telefone: register.telefone.replaceAll(" ", "") }),
            ...(register.cpf && { cpf: register.cpf.replaceAll(" ", "") })
        }
        console.log(dados);
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await api.put("atualizarPerfil", dados, config);
            localStorage.setItem("usuario", JSON.stringify(dados));
            setUsuario( {...dados} );
            setAlterado(true);
        }
        catch (e) {
            console.log("Error >", e)
            const { data } = e.response;
            switch (data.code) {
                case CODE.EmailCode:
                case -9:
                    setMensagemEmail(data.mensagem);
                    break;
                case CODE.NomeCode:
                    setMensagemNome(data.mensagem);
                    break;
                case CODE.CPFCode:
                case -10:
                
                    setMensagemCPF(data.mensagem);
                    break;
                case CODE.telefoneCode:
                    setMensagemTelefone(data.mensagem);
                    break;
                default:
                    setMensagemNome(e.message);
                    break;
            }
        }
    }
    useEffect(() => {
        const user = usuario ?? JSON.parse(localStorage.getItem("usuario"));
        console.log(user);
        setRegister({ ...user });
    }, []);
    return (
        <>
            {alterado ?
                <ConfirmacaoAlterado />
                :
                <Form onSubmit={submit}>
                    <Titulo>
                        Edite seu cadastro
                    </Titulo>

                    <Field.Text text={"nome"} nome="nome" type={"text"} value={register.nome} onChange={handleState} isError={ErrorNome} errorMensagem={mensagemErrorNome} />
                    <Field.Text text={"E-mail"} nome="email" type="email" value={register.email} onChange={handleState} isError={ErrorEmail} errorMensagem={mensagemErrorEmail} />

                    <HStack gap="15px">
                        <Field.CPF text={"cpf"} nome="cpf" type={"text"} value={register.cpf} onChange={handleState} isError={ErrorCPF} errorMensagem={mensagemErrorCPF} />
                        <Field.Telefone text={"telefone"} nome="telefone" value={register.telefone} type="text" onChange={handleState} isError={ErrorTelefone} errorMensagem={mensagemErrorTelefone} />
                    </HStack>

                    <Field.Senha text={"nova senha"} nome="senha" onChange={handleState} isError={ErrorSenha} errorMensagem={mensagemErrorSenha} />
                    <Field.Senha text={"confirmar senha"} nome="novasenha" onChange={handleState} isError={ErrorConfirmar} errorMensagem={mensagemErrorConfirmar} />

                    <HStack gap="24px" mt="20px">
                        <BotaoVerde text="Cancelar" onClick={onClose} />
                        <BotaoRosa text="Aplicar" type="submit" />
                    </HStack>
                </Form>
            }
        </>
    )
}

export default EditaUsuario