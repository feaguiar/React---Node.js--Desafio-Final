import styled from "@emotion/styled";
import InputMask from 'react-input-mask';

const styleInput = `
    
`;

const SingleInput = styled.input`
  all: unset;
  padding: 10px 14px;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;

  &::placeholder{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #9B9BB2;
  }
`;

const Masked = styled(InputMask)`
  all: unset;
  padding: 10px 14px;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;

  &::placeholder{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #9B9BB2;
  }
`;

const Senha = styled(SingleInput)`
  width: 100%;
`;

const TextAreaInput = styled.textarea`
  all: unset;
  padding: 10px 14px;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  resize: none;

  &::placeholder{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #9B9BB2;
  }
`;

const Input = {
  Senha,
  SingleInput,
  Masked,
  TextAreaInput,
};

export default Input;