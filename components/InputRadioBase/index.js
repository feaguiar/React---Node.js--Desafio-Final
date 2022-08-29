import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  styled
} from '@mui/material';

import ErrorText from '../Field/ErrorText';

const valoresInput=['Paga', 'Pendente'];

export function InputRadioFormBase({ errorMensagem, isError, nome, onChange, value }) {
  const BpIcon = styled('span')({
    width: '24px',
    height: '24px',
    backgroundColor: '#C8C8D7',
    borderRadius: '50%',
    border: 'none',
  });

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#0E8750',
    '&:before': {
      width: '16px',
      height: '16px',
      display: 'block',
      position: 'absolute',
      transform: 'translate(40%, 5%)',
      content: '"\\2713"',
      color: '#FFF',
    },
  });

  function BpRadio(props) {
    return (
      <Radio
        sx={{
          position: 'relative',
          '&:hover': {
            bgcolor: 'transparent',
          },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        required
        {...props}
      />
    );
  };

  return (
    <>
      <FormControl>
        <FormLabel
          sx={{
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#3F3F55',
            textTransform: 'capitalize',
            '&.Mui-focused': {
              color: '#3F3F55',
            },
            '&.MuiFormLabel-colorPrimary': {
              color: '#3F3F55',
            },
          }}
        >
          Status*
        </FormLabel>

        <RadioGroup
          name={nome}
          value={ value ? value : '...' }
          onChange={onChange}
          sx={{
            ml: '8px',
            pt: '8px',
          }}
        >
          {valoresInput.map((valorInput, index) =>
            <FormControlLabel
              key={index}
              value={valorInput}
              control={<BpRadio />}
              label={`Cobrança ${valorInput}`}
              sx={{
                padding: '12px 16px',
                gap: '8px',
                '& .MuiTypography-root': {
                  fontFamily: 'Nunito',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#3F3F55',
                  textTransform: 'capitalize',
                },
                backgroundColor: '#F0F0F5',
                borderRadius: '10px',
                '& + &': {
                  marginTop: '8px',
                },
              }}
            />
          )}
        </RadioGroup>

        {isError && <ErrorText>{errorMensagem}</ErrorText>}
      </FormControl>
    </>
  );
};
