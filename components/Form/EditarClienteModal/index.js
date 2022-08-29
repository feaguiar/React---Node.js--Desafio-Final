import React from 'react'
import Form from '../FormBasic/style'
import Styled from './style'
import iconCliente from "./../../../assets/iconCliente.svg"
import Field from '../../Field'
import HStack from '../../Hstack'
import BotaoRosa from '../../Botao/BotaoRosa'
import BotaoVerde from '../../Botao/BotaoVerde'
import useError from '../../../hooks/useError'
import useCliente from '../../../hooks/useCliente'
import api from '../../../services/api'
import { useGlobal } from '../../../hooks/useGlobal'

const EmailCode = -1;
const CPFCode = -2;
const NomeCode = -3;
const telefoneCode = -4;
const userCode = -5;

function EditarClienteForm({ onClose, setOpenAlert, mensagem }) {
      const [register, setRegister] = React.useState({});
      const { clientes, setClientes } = useCliente();
      const { token } = useGlobal();

      const [
            errorNome,
            mensagemErrorNome,
            isValidNome,
            setErrorNome
      ] = useError();

      const [
            errorEmail,
            mensagemErrorEmail,
            isValidEmail,
            setErrorEmail
      ] = useError();

      const [
            errorTelefone,
            mensagemErrorTelefone,
            isValidTelefone,
            setErrorTelefone
      ] = useError();
      const [
            errorCPF,
            mensagemErrorCPF,
            isValidCPF,
            setErrorCPF
      ] = useError();

      function handleState({ target }) {
            const { name, value } = target;

            setRegister({ ...register, ...{ [name]: value } })
      }

      async function informacaoCep({ target }) {
            const { value } = target;
            try {
                  const response = await fetch(`http://viacep.com.br/ws/${value}/json/`);
                  const { bairro,
                        complemento,
                        localidade,
                        logradouro,
                        uf: UF
                  } = await response.json();

                  setRegister({ ...register, ...{ cidade: localidade, bairro, complemento, endereco: logradouro, UF } })

            } catch (e) {
                  console.error("erro> ", e);
            }
      }

      const submit = async (e) => {
            e.preventDefault();
            isValidNome();
            isValidEmail();
            isValidTelefone();
            isValidCPF();

            // verificações de nome
            if (!register.nome.trim().length)
                  setErrorNome("Este campo deve ser preenchido");

            else if (register.nome.trim().split(" ").length < 2)
                  setErrorNome("nome e sobrenome(\"minimo\")");

            // verificações de telefone
            if (!register.telefone.trim().length)
                  setErrorTelefone("Este campo deve ser preenchido");

            try {
                  const config = {
                        headers: {
                              'Content-type': 'application/json',
                              Authorization: `Bearer ${token}`
                        }
                  }
                  // trocar rota back
                  const data = await api.put("cadastroCliente", register, config)

                  switch (data.code) {
                        case EmailCode:
                              setErrorEmail(data.mensagem);
                              break;
                        case NomeCode:
                              setErrorNome(data.mensagem);
                              break;
                        case CPFCode:
                              setErrorCPF(data.mensagem);
                              break;
                        case telefoneCode:
                              setErrorTelefone(data.mensagem);
                              break;
                        case userCode:
                              setOpenAlert(true);
                              mensagem(data.mensagem, "warning");
                              onClose()
                              break;
                        default:
                              setOpenAlert(true);
                              mensagem(data.mensagem, "info");
                              onClose();
                              register.status = 0;
                              setClientes([...clientes, register]);
                              break;
                  }
            }
            catch (erro) {
                  setOpenAlert(true);
                  mensagem(erro.message, "error");
                  onClose()
                  console.log("erro>", erro);
            }
      }

      return (
            <>
                  <Form onSubmit={submit}>
                        <Styled.Titulo>
                              <Styled.Imagem src={iconCliente} alt="Cliente icone" />
                              <Styled.Text>Editar Cliente</Styled.Text>
                        </Styled.Titulo>

                        <Field.Text text={"nome"} nome="nome" type={"text"} required onChange={handleState} isError={errorNome} errorMensagem={mensagemErrorNome} />
                        <Field.Text text={"E-mail"} nome="email" type="email" required onChange={handleState} isError={errorEmail} errorMensagem={mensagemErrorEmail} />

                        <HStack gap="24px">
                              <Field.Text text={"CPF"} nome="cpf" type={"number"} onChange={handleState} required isError={errorCPF} errorMensagem={mensagemErrorCPF} />
                              <Field.Text text={"telefone"} nome="telefone" type={"tel"} required onChange={handleState} isError={errorTelefone} errorMensagem={mensagemErrorTelefone} />
                        </HStack>

                        <Field.Text text={"endereço"} nome="endereco" type={"text"} onChange={handleState} value={register.endereco} />
                        <Field.Text text={"Complemento"} nome="complemento" type={"text"} onChange={handleState} value={register.complemento} />

                        <HStack gap="24px">
                              <Field.Text text={"CEP"} onBlur={informacaoCep} nome="cep" type={"number"} onChange={handleState} value={register.CEP} />
                              <Field.Text text={"Bairro"} nome="bairro" type={"text"} onChange={handleState} value={register.bairro} />
                        </HStack>

                        <HStack gap="24px">
                              <Field.Text text={"Cidade"} nome="cidade" type={"text"} required onChange={handleState} value={register.cidade} />
                              <Field.Text style={{ width: "1rem" }} text={"UF"} nome="uf" type={"text"} required onChange={handleState} value={register.UF} />
                        </HStack>

                        <HStack gap="24px" mt="20px">
                              <BotaoVerde text="Cancelar" onClick={onClose} />
                              <BotaoRosa text="Aplicar" type="submit" />
                        </HStack>
                  </Form>
            </>
      )
}

export default EditarClienteForm