import styled from '@emotion/styled';

import iconEditar from '../../assets/iconEditar.svg';
import iconExcluir from '../../assets/iconExcluir.svg';

const Text = styled.p`
  margin-top: 4px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 11px;
`;

export function ManipularCobranca({ tipo, ...rest }) {

  return (
    <div
      style={{
        display: 'flex',
        width: 'min-content',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      {...rest}
    >
      <img
        src={tipo === 'editar' ? iconEditar : iconExcluir}
        alt={tipo === 'editar' ? 'ícone de editar cobrança' : 'ícone de Excluir cobrança'}
      /* onClick={(e) => tipo === 'editar' ? setOpen() :  setOpen(true)} */
      />
      <Text
        style={{
          color: `${tipo === 'editar' ? '#747488' : '#AE1100'}`
        }}
      >
        {tipo === 'editar' ? 'Editar' : 'Excluir'}
      </Text>
    </div>
  );
};
