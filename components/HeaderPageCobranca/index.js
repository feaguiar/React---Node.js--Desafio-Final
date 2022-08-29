import styled from '@emotion/styled';
import { Box } from '@mui/material';

import PesquisaCobranca from '../Field/Pesquisa';

import cobrancaIcon from '../../assets/iconCobranca.svg';
import filterIcon from '../../assets/iconFiltro.svg';

const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 130%;
  color: #3F3F55;
`

export function HeaderPageCobranca() {
  return (
    <Box margin='30px 0 30px 0'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Box style={{ display: 'flex', alignItems: 'center', width: 'min-content' }}>
        <img src={cobrancaIcon} alt='client icon' height='32px' />
        <Text style={{ marginLeft: '16px', }} > Cobranças </Text>
      </Box>

      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px'
        }}
      >
        <Box>
          <img src={filterIcon} alt='filter' />
        </Box>
        <PesquisaCobranca />
      </Box>
    </Box>
  );
};
