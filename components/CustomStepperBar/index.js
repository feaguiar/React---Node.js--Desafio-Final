import { Box } from '@mui/material';

export function CustomStepperBar({ itemAtivo, setItemAtivo }) {
  function trocarPassoCadastro(e) {
    if (Number(e.target.name) === 0) {
      setItemAtivo(0);
    } else if (Number(e.target.name) === 1) {
      setItemAtivo(1);
    } else {
      setItemAtivo(0);
    }
  };

  return (
    <Box
      sx={{
        width: '262px',
        mt: '240px',
        'button + button': {
          ml: '8px',
        },
      }}
    >
      <Box
        name={'0'}
        component='button'
        sx={{
          all: 'unset',
          width: '82px',
          height: '6px',
          backgroundColor: `${itemAtivo === 0 ? '#0E8750' : '#DEDEE9'}`,
          borderRadius: '20px',
          cursor: 'pointer',
        }}
        onClick={(e) => trocarPassoCadastro(e)}
      />

      <Box
        name={'1'}
        component='button'
        sx={{
          all: 'unset',
          width: '82px',
          height: '6px',
          backgroundColor: `${itemAtivo === 1 ? '#0E8750' : '#DEDEE9'}`,
          borderRadius: '20px',
          cursor: 'pointer',
        }}
        onClick={(e) => trocarPassoCadastro(e)}
      />

      <Box
        name={'2'}
        component='button'
        sx={{
          all: 'unset',
          width: '82px',
          height: '6px',
          backgroundColor: `${itemAtivo === 2 ? '#0E8750' : '#DEDEE9'}`,
          borderRadius: '20px',
          cursor: 'pointer',
        }}
        onClick={(e) => trocarPassoCadastro(e)}
      />
    </Box>
  );
};
