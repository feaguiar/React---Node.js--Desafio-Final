import { useEffect, useState } from 'react';

import { useGlobal } from '../../hooks/useGlobal';
import { useCobranca } from '../../hooks/useCobranca';
import useError from '../../hooks/useError';
import api from '../../services/api';

import Field from '../Field';
import HStack from '../Hstack';
import BotaoRosa from '../Botao/BotaoRosa';
import BotaoVerde from '../Botao/BotaoVerde';
import { InputRadioFormBase } from '../InputRadioBase';
import { formatFormDate, formatToFormCurrency } from '../../util/formats';
import { errorMessage, successMessage } from '../../util/toast';

import Form from '../Form/FormBasic/style';
import Styled from './style';
import iconCobranca from '../../assets/iconCobranca.svg';

function CobrancaFormEditar({ onClose, textEdit }) {
  const [register, setRegister] = useState({
    descricao: '',
    vencimento: '',
    valor: '',
    status: '',
  });
  const { cobrancas, setCobrancas } = useCobranca();
  const { clienteSelecionado, token } = useGlobal();

  useEffect(() => {
    setRegister(textEdit);
  }, []);

  const [
    errorDescricao,
    mensagemErrorDescricao,
    isValidDescricao,
    setErrorDescricao
  ] = useError();
  const [
    errorVencimento,
    mensagemErrorVencimento,
    isValidVencimento,
    setErrorVencimento
  ] = useError();
  const [
    errorValor,
    mensagemErrorValor,
    isValidValor,
    setErrorValor
  ] = useError();
  const [
    errorStatus,
    mensagemErrorStatus,
    isValidStatus,
    setErrorStatus
  ] = useError();

  function handleState({ target }) {
    const { name, value } = target;

    setRegister({ ...register, ...{ [name]: value } });
  };

  const submit = async (e) => {
    e.preventDefault();
    
    isValidDescricao();
    isValidVencimento();
    isValidValor();
    isValidStatus();

    // verificação da descrição
    if (!register.descricao.trim().length) {
      setErrorDescricao('Este campo deve ser preenchido.');
    }
    // verificação do vencimento
    if (!register.vencimento.trim().length) {
      setErrorVencimento('Este campo deve ser preenchido.');
    }
    // verificação do valor
    if (Number(register.valor) < 0) {
      setErrorValor('Os valores devem ser igual ou maior que zero.');
    }
    // verificação do status
    if (!register.status.trim().length) {
      setErrorStatus('Este campo deve ser preenchido.');
    }

    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      const form = {
        descricao: register.descricao,
        valor: formatToFormCurrency(register.valor),
        status: register.status,
        vencimento: formatFormDate(register.vencimento),
      };
      console.log({ formEditar: form });
       
      const { data: mensagem } = await api.put(`/cobrancas/${register.id}`, form, config);

      setCobrancas([...cobrancas, register]);
      successMessage(mensagem);
      return onClose();
    } catch (erro) {
      console.log('erro>', erro.response);
      errorMessage(erro.response.data);
    }
  };

  return (
    <>
      <Form onSubmit={submit}>
        <Styled.Titulo>
          <Styled.Imagem src={iconCobranca} alt='Cobranca icone' />
          <Styled.Text style={{ marginLeft: '16px' }}>Edição de Cobrança</Styled.Text>
        </Styled.Titulo>

        <Field.Text text={'nome'} nome='nome' type={'text'} value={clienteSelecionado.nome} required disabled />
        <Field.TextArea text={'descrição'} nome='descricao' value={register.descricao} onChange={handleState} required isError={errorDescricao} errorMensagem={mensagemErrorDescricao} />

        <HStack gap='24px'>
          <Field.Text text={'vencimento'} nome='vencimento' type={'date'} value={register.vencimento} onChange={handleState} required isError={errorVencimento} errorMensagem={mensagemErrorVencimento} />
          <Field.Text text={'valor'} nome='valor' type={'number'} min='0' value={register.valor} onChange={handleState} required isError={errorValor} errorMensagem={mensagemErrorValor} />
        </HStack>

        <InputRadioFormBase nome='status' value={register.status} onChange={handleState} isError={errorStatus} errorMensagem={mensagemErrorStatus} />

        <HStack gap='24px' mt='20px'>
          <BotaoVerde text='Cancelar' onClick={onClose} />
          <BotaoRosa text='Aplicar' type='submit' />
        </HStack>
      </Form>
    </>
  );
};

export default CobrancaFormEditar;