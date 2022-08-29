import { styled } from '@mui/material/styles';
import { InputBase, InputLabel } from '@mui/material';

export const BaseCustomLabel = styled(InputLabel)(({ theme }) => ({
  '& .MuiInputLabel-shrink': {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#344054',
  },
}));

export const BaseCustomInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(0.75),
  },
  '& .MuiInputBase-input': {
    width: '100%',
    height: '21px',
    position: 'relative',
    padding: '10px 14px',
    fontFamily: [
      'Nunito',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    fontSize: '16px',
    lineHeight: '24px',
    color: '#3F3F55',
    backgroundColor: '#FFFFFF',
    border: '1px solid #D0D5DD',
    borderRadius: '8px',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    '&:placeholder': {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#667085',
    },
  },
}));
