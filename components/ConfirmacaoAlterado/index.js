import { Avatar, Box, Typography } from '@mui/material';

import SucessoCadastro from '../../assets/sucesso-cadastro.svg';

export function ConfirmacaoAlterado() {
  return (
    <Box
      sx={{
        width: '512px',
        height: '512px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F5',
        borderRadius: '30px',
      }}
    >
      <Avatar
        alt='imagem de confirmação de cadastro.'
        src={`${SucessoCadastro}`}
        sx={{ mb: '24px', width: '104px', height: '104px' }}
      />

      <Typography
        component='h1'
        variant='h5'
        sx={{
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '24px',
          lineHeight: '31px',
          color: '#343447',
        }}
      >
        Cadastro alterado com sucesso!
      </Typography>
    </Box>
  );
};
