import React, { useEffect } from 'react'
import Form from '../FormBasic/style'
import Styled from './style'
import iconCliente from './../../../assets/iconCliente.svg'
import Field from '../../Field'
import HStack from '../../Hstack'
import BotaoRosa from '../../Botao/BotaoRosa'
import BotaoVerde from '../../Botao/BotaoVerde'
import useError from '../../../hooks/useError'
import useCliente from '../../../hooks/useCliente'
import api from '../../../services/api'
import { useGlobal } from '../../../hooks/useGlobal'
import CODE from '../../../helper/codes'

function ClienteForm({ onClose, setOpenAlert, mensagem, id }) {
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
    errorCEP,
    mensagemErrorCEP,
    isValidCEP,
    setErrorCEP
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

      setRegister({ ...register, ...{ cidade: localidade, bairro, complemento, endereco: logradouro, UF } });
    } catch (e) {
      console.error('erro> ', e);
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    isValidNome();
    isValidEmail();
    isValidTelefone();
    isValidCPF();
    isValidCEP();

    let teste = false;

    // verificações de nome
    if (!register.nome.trim().length) {
      teste = true;
      setErrorNome('Este campo deve ser preenchido');
    } else if (register.nome.trim().split(' ').length < 2) {
      teste = true;
      setErrorNome('nome e sobrenome(\'minimo\')');
    }
    // verificações de telefone
    if (register.telefone.includes('_')) {
      teste = true;
      setErrorTelefone('Este campo deve ser preenchido');
    }
    // verificações de cpf
    if (register.cpf.includes('_')) {
      teste = true;
      setErrorCPF('Este campo deve ser preenchido');
    }
    // verificações de cep
    if (register.cep.includes('_')) {
      teste = true;
      setErrorCEP('Este campo deve ser preenchido');
    }
    if (teste)
      return;

    try {
      console.log(register);
      const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const dados = { ...register };
      dados.telefone = dados.telefone.replaceAll(' ', '');
      dados.cpf = dados.cpf.replaceAll(' ', '');
      dados.cep = dados.cep.replaceAll('-', '');
      dados.logradouro = dados.endereco;
      const { data } = id ? await api.put(`clientes/${id}`, dados, config) : await api.post('cadastroCliente', dados, config);
      
      setOpenAlert(true);
      mensagem(data.mensagem ?? data.messagem ?? data, 'info');
      onClose();

      if (id) {
        const {data} = await api.get('clientes', config);
        data.sort( (a,b)=> a.id-b.id );
        setClientes([...data]);
        return;
      }

      dados.status = 0;
      setClientes([...clientes, dados]);
    } catch (error) {
      const erro = error.response.data;
      switch (erro.code) {
        case CODE.EmailCode:
          setErrorEmail(erro.mensagem ?? erro.messagem);
          console.log(erro)
          break;
        case CODE.NomeCode:
          setErrorNome(erro.mensagem ?? erro.messagem);
          break;
        case CODE.CPFCode:
          setErrorCPF(erro.mensagem ?? erro.messagem);
          break;
        case CODE.telefoneCode:
          setErrorTelefone(erro.mensagem ?? erro.messagem);
          break;
        case CODE.userCode:
          setOpenAlert(true);
          mensagem(erro.mensagem, 'warning');
          onClose()
          break;
        default:
          console.log(erro);
          setOpenAlert(true);
          mensagem(erro, 'error');
          onClose();
      }
    }
  };

  useEffect(() => {
    
      const ClienteAlterar = clientes.find((cliente) => {
        return Number(cliente.id) === Number(id);
      })

      if(!ClienteAlterar){
        setRegister({});
        onClose()
        return;
      }

      ClienteAlterar.endereco = ClienteAlterar.logradouro;
      console.log(ClienteAlterar);
      setRegister({ ...ClienteAlterar });
      return;
    

    
  }, []);

  return (
    <>
      <Form onSubmit={submit}>
        <Styled.Titulo>
          <Styled.Imagem src={iconCliente} alt='Cliente icone' />
          <Styled.Text>Cadastro do Cliente</Styled.Text>
        </Styled.Titulo>

        <Field.Text text={'nome'} nome='nome' type={'text'} required value={register.nome} onChange={handleState} isError={errorNome} errorMensagem={mensagemErrorNome} />
        <Field.Text text={'E-mail'} nome='email' type='email' required value={register.email} onChange={handleState} isError={errorEmail} errorMensagem={mensagemErrorEmail} />

        <HStack gap='24px'>
          <Field.CPF text={'CPF'} nome='cpf' onChange={handleState} required value={register.cpf} isError={errorCPF} errorMensagem={mensagemErrorCPF} />
          <Field.Telefone text={'telefone'} nome='telefone' type={'tel'} required value={register.telefone} onChange={handleState} isError={errorTelefone} errorMensagem={mensagemErrorTelefone} />
        </HStack>

        <Field.Text text={'endereço'} nome='endereco' type={'text'} value={register.endereco} onChange={handleState} />
        <Field.Text text={'Complemento'} nome='complemento' type={'text'} value={register.complemento} onChange={handleState} />

        <HStack gap='24px'>
          <Field.CEP text={'CEP'} onBlur={informacaoCep} nome='cep' value={register.cep} onChange={handleState} isError={errorCEP} errorMensagem={mensagemErrorCEP} />
          <Field.Text text={'Bairro'} nome='bairro' type={'text'} value={register.bairro} onChange={handleState} />
        </HStack>

        <HStack gap='24px'>
          <Field.Text text={'Cidade'} nome='cidade' type={'text'} required value={register.cidade} onChange={handleState} />
          <Field.Text style={{ width: '1rem' }} text={'UF'} maxLength={2} minLength={2} nome='estado' value={register.estado} type={'text'} required onChange={handleState} />
        </HStack>

        <HStack gap='24px' mt='20px'>
          <BotaoVerde text='Cancelar' onClick={onClose} />
          <BotaoRosa text='Aplicar' type='submit' />
        </HStack>
      </Form>
    </>
  );
};

export default ClienteForm;