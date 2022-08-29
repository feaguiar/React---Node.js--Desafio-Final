import { useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { FormBotaoRosa } from '../../components/FormBotaoRosa';
import { InputFormBase } from '../InputFormBase';
import api from '../../services/api';
import { errorMessage } from '../../util/toast';

export function Formulario({ itemAtivo, setItemAtivo, trocarItemAtivo }) {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    repeteSenha: ''
  });
  const [erroInput, setErroInput] = useState(false);
  const [errosForm, setErrosForm] = useState({});

  function limparForm() {
    setForm({
      nome: '',
      email: '',
      senha: '',
      repeteSenha: ''
    });
  };

  function capturarValorInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function pegarInputOnBlur(e) {
    const valorDoInput = e.target.value.trim();
    const nomeDoInput = e.target.name;

    if (!valorDoInput) {
      setErrosForm({
        ...errosForm,
        [e.target.name]: `O campo ${e.target.name} é obrigatório.`
      })
      setErroInput(true);
    } else if (valorDoInput.length < 6 && (nomeDoInput === 'senha' || nomeDoInput === 'repeteSenha')) {
      setErrosForm({
        ...errosForm,
        [e.target.name]: `O campo ${e.target.name} deve ter pelo menos 6 caracteres.`
      });
      setErroInput(true);
    } else {
      setErrosForm({
        ...errosForm,
        [e.target.name]: ''
      });
      setErroInput(false);
    }
  };

  function podeProximoForm() {
    erroInput ? setItemAtivo(0) : trocarItemAtivo();
  };

  async function enviarDadosForm(e) {
    e.preventDefault();

    if (form.senha !== form.repeteSenha) {
      setItemAtivo(1);
      setErrosForm({
        ...errosForm,
        ...{
          senha: 'Senha e repeteSenha devem ser iguais.',
          repeteSenha: 'Senha e repeteSenha devem ser iguais.'
        }
      });
      return;
    }

    try {
      await api.post('/cadastro', {
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      });

      limparForm();
      trocarItemAtivo();
    } catch (error) {
      errorMessage(error.response.data);
    }
  };

  return (
    <Box
      component='form'
      noValidate
      onSubmit={enviarDadosForm}
      sx={{ mt: 1, width: '100%', }}
    >
      <InputFormBase
        login={false}
        etiqueta={itemAtivo === 0 ? 'Nome' : 'Senha'}
        tipoInput={itemAtivo === 0 ? 'name' : 'password'}
        value={itemAtivo === 0 ? form.nome : form.senha}
        onChange={(e) => capturarValorInput(e)}
        onBlur={(e) => pegarInputOnBlur(e)}
        // @ts-ignore
        erroMensagem={itemAtivo === 0 ? errosForm?.nome : errosForm?.senha}
      />

      <InputFormBase
        repeteSenha={itemAtivo === 0 ? false : true}
        login={false}
        etiqueta={itemAtivo === 0 ? 'E-mail' : 'Senha'}
        tipoInput={itemAtivo === 0 ? 'email' : 'password'}
        value={itemAtivo === 0 ? form.email : form.repeteSenha}
        onChange={(e) => capturarValorInput(e)}
        onBlur={(e) => pegarInputOnBlur(e)}
        erroMensagem={itemAtivo === 0 ? errosForm?.email : errosForm?.repeteSenha}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <FormBotaoRosa
          type='button'
          variant='contained'
          onClick={itemAtivo === 0 ? podeProximoForm : enviarDadosForm}
        >
          {itemAtivo === 0 ? 'Continuar' : 'Entrar'}
        </FormBotaoRosa>

        <Box>
          <Typography
            component='span'
            variant='body2'
            sx={{
              mr: '4px',
              fontFamily: 'Nunito',
              fontWeight: 400
            }}
          >
            Já possui uma conta? Faça seu
          </Typography>

          <Link
            component={RouterLink}
            to={'/'}
            color='#DA0175'
            sx={{
              fontFamily: 'Nunito',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              textDecorationLine: 'underline',
            }}
          >
            Login
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
