import { Avatar, Box, Typography } from '@mui/material';

import SucessoCadastro from '../../assets/sucesso-cadastro.svg';

export function ConfirmacaoCadastro() {
  return (
    <Box
      sx={{
        mt: '180px',
        maxWidth: '600px',
        width: '100%',
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
        Cadastro realizado com sucesso!
      </Typography>
    </Box>
  );
};
