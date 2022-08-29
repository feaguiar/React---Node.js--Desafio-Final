import { Button, styled } from "@mui/material";

export const FormBotaoRosa = styled(Button)({
  margin: '26px 0 15px',
  padding: '4px 40px',
  fontFamily: [
    'Nunito',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '25px',
  letterSpacing: '0.4px',
  textTransform: 'none',
  color: '#F8F8F9',
  backgroundColor: '#DA0175',
  borderRadius: '10px',
  transaction: 'opacity 0.2s',
  '&:hover': {
    backgroundColor: '#DA0175',
    opacity: 0.8,
  },
});
