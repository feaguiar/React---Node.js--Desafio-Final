import styled from '@emotion/styled';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react'
import { Content } from './Content';
import ErrorText from './ErrorText';
import Input from './Input';
import Label from './Label';

const ContainerInputeyes = styled.span`
  width: 100%;
  position: relative;
  display: flex;
`;

function Telefone({ text, nome, type, required, grow, value, basic, shrink, placeholder, style, isError, errorMensagem, ...rest }) {
  return (
    <Label grow={grow} shrink={shrink} basic={basic} style={style}>
      <Content >{text}{required ? "*" : ""}</Content>
      <Input.Masked mask="99 9 9999 9999" value={value} required={required} style={{ ...(isError && { borderColor: "#E70000" }) }}
        type={type} name={nome} placeholder={placeholder ? placeholder : "Digite o " + nome} {...rest} />
      {isError && <ErrorText>{errorMensagem}</ErrorText>}
    </Label>
  );
};

function CPF({ text, nome, type, required, grow, value, basic, shrink, placeholder, style, isError, errorMensagem, ...rest }) {
  return (
    <Label grow={grow} shrink={shrink} basic={basic} style={style}>
      <Content >{text}{required ? "*" : ""}</Content>
      <Input.Masked mask="999 999 999 99" value={value} required={required} style={{ ...(isError && { borderColor: "#E70000" }) }}
        type={type} name={nome} placeholder={placeholder ? placeholder : "Digite o " + nome} {...rest} />
      {isError && <ErrorText>{errorMensagem}</ErrorText>}
    </Label>
  );
};


function CEP({ text, nome, type, required, grow, value, basic, shrink, placeholder, style, isError, errorMensagem, ...rest }) {
  return (
    <Label grow={grow} shrink={shrink} basic={basic} style={style}>
      <Content >{text}{required ? "*" : ""}</Content>
      <Input.Masked mask="99999-999" value={value} required={required} style={{ ...(isError && { borderColor: "#E70000" }) }}
        type={type} name={nome} placeholder={placeholder ? placeholder : "Digite o " + nome} {...rest} />
      {isError && <ErrorText>{errorMensagem}</ErrorText>}
    </Label>
  );
};

function Text({ text, nome, type, required, grow, value, basic, shrink, placeholder, style, isError, errorMensagem, ...rest }) {
  if (value) {
    rest.value = value;
  }

  return (
    <Label grow={grow} shrink={shrink} basic={basic} style={style}>
      <Content >{text}{required ? "*" : ""}</Content>
      <Input.SingleInput required={required} style={{ ...(isError && { borderColor: "#E70000" }), }} type={type} name={nome} placeholder={placeholder ? placeholder : "Digite o " + nome} {...rest} />
      {isError && <ErrorText>{errorMensagem}</ErrorText>}
    </Label>
  );
};

function TextArea({ text, nome, type, required, grow, value, basic, shrink, placeholder, style, isError, errorMensagem, ...rest }) {
  if (value) {
    rest.value = value;
  }

  return (
    <Label grow={grow} shrink={shrink} basic={basic} style={style}>
      <Content >{text}{required ? "*" : ""}</Content>
      <Input.TextAreaInput required={required} style={{ ...(isError && { borderColor: "#E70000" }), }} wrap='soft' name={nome} placeholder={placeholder ? placeholder : "Digite o " + nome} {...rest} />
      {isError && <ErrorText>{errorMensagem}</ErrorText>}
    </Label>
  );
};

const ContainerIcon = styled.span`
  height: min-content;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function Senha({ text, nome, type, required, grow, value, basic, shrink, placeholder, style, isError, errorMensagem, ...rest }) {
  if (value) {
    rest.value = value;
  }

  const [visivel, setVisivel] = useState(false);
  return (
    <Label grow={grow} shrink={shrink} basic={basic} >
      <Content >{text}{required ? "*" : ""}</Content>
      <ContainerInputeyes>
        <Input.Senha required={required} style={{ ...(isError && { borderColor: "#E70000" }) }} type={visivel ? "text" : "password"} name={nome} autoComplete="new-password" placeholder={placeholder ? placeholder : "Digite o " + nome} {...rest} />
        <ContainerIcon
          onClick={() => setVisivel(!visivel)}
        >
          {visivel ? <Visibility /> : <VisibilityOff />}
        </ContainerIcon>
      </ContainerInputeyes>
      {isError && <ErrorText>{errorMensagem}</ErrorText>}
    </Label>
  );
};

const Field = {
  Text,
  Senha,
  Telefone,
  CEP,
  CPF,
  TextArea
};

export default Field;