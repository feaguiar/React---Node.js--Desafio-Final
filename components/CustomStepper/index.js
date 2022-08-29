import { styled } from '@mui/material/styles';
import {
  Box,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography
} from '@mui/material';
import { Adjust, Album, CheckCircle } from '@mui/icons-material';

const steps = [
  {
    label: 'Cadastre-se',
    description: 'Por favor, escreva seu nome e e-mail.',
  },
  {
    label: 'Escolha uma senha',
    description: 'Escolha uma senha segura.',
  },
  {
    label: 'Cadastro realizado com sucesso',
    description: 'E-mail e senha cadastrados com sucesso.',
  },
];

const CustomThemeStepLabel = {
  '& .MuiStepLabel-iconContainer': {
    mt: '-25px',
    pl: '2px',
  },
  '& .MuiStepLabel-label.Mui-active, & .MuiStepLabel-label.Mui-completed, & .MuiStepLabel-label.Mui-disabled': {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#0E8750',
  },
};

const CustomThemeTypography = {
  fontFamily: 'Nunito',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '23px',
  color: '#3F3F55',
};

const CustomConnector = styled(StepConnector)`
  & .Mui-active {
    & .MuiStepConnector-line {
      background-color: #0E8750;
    }
  }
  & .Mui-completed {
    & .MuiStepConnector-line {
      background-color: #0E8750;
    }
  }  
  & .MuiStepConnector-lineVertical {
    margin-top: -30px;
    margin-bottom: -6px;
    width: 3px;
    height: 50px;
    border: 0;
    background-color: #0E8750;
  }
`;

function CustomStepIcon(props) {
  const { active, completed, icon } = props;

  return (
    completed || (active && icon === 3) ? (
      <CheckCircle sx={{ color: '#0E8750', }} />
    ) : (
      active ? (
        <Album sx={{ color: '#0E8750', }} />
      ) : (
        <Adjust sx={{ color: '#0E8750' }} />
      )
    )
  );
};

export function CustomStepper({ itemAtivo }) {

  return (
    <>
      <Box sx={{ maxWidth: '390px', mt: '175px', }}>
        <Stepper
          activeStep={itemAtivo}
          orientation='vertical'
          connector={<CustomConnector />}
        >
          {steps.map(step => (
            <Step key={step.label}>
              <StepLabel
                StepIconComponent={CustomStepIcon}
                sx={CustomThemeStepLabel}
              >
                {step.label}

                <Typography sx={CustomThemeTypography} >
                  {step.description}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
};
