import { useState } from 'react';
import { FormControl, FormHelperText, IconButton, InputAdornment, Typography } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';

import { BaseCustomInput } from './styles';

export function InputFormBase({
  erroInput = false,
  erroMensagem = '',
  etiqueta,
  login = false,
  repeteSenha = false,
  tipoInput,
  ...rest
}) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const inputProps = {
    rotulo: etiqueta,
    pseudo: etiqueta.replace('-', '').toLowerCase(),
    tipo: tipoInput,
  };

  function manipularMostrarSenha() {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <FormControl
      required
      fullWidth
      sx={{
        '&.MuiFormControl-root': { mb: '20px' }
      }}
    >
      <Typography
        component='label'
        variant='body2'
        sx={{
          fontFamily: 'Nunito',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '14px',
          lineHeight: '20px',
          color: '#344054',
        }}
      >
        {login ? inputProps.rotulo : (repeteSenha ? `Repita a ${inputProps.pseudo}*` : `${inputProps.rotulo}*`)}
      </Typography>

      <BaseCustomInput
        id={repeteSenha ? 'repeteSenha' : inputProps.pseudo}
        name={repeteSenha ? 'repeteSenha' : inputProps.pseudo}
        type={mostrarSenha ? 'text' : inputProps.tipo}
        placeholder={`Digite sua ${inputProps.pseudo}`}
        autoComplete={
          inputProps.tipo === 'password' ? 'current-password' : inputProps.tipo
        }
        endAdornment={(
          inputProps.tipo === 'password' &&
          <InputAdornment
            position="start"
            sx={{ position: 'absolute', right: '0px', }}
          >
            <IconButton
              aria-label="toggle password visibility"
              onClick={manipularMostrarSenha}
            >
              {mostrarSenha ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )}
        style={{
          ...(
            erroInput &&
            {
              border: '1px solid #E70000',
              borderRadius: '8px',
            }
          )
        }}
        {...rest}
      />
      <FormHelperText
        sx={{
          ml: '0',
          mt: '6px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
          color: '#E70000',
        }}
      >
        {erroMensagem}
      </FormHelperText>
    </FormControl>
  );
};
