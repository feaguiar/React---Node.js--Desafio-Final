import styled from '@emotion/styled';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   cursor: pointer;
`;

const Text = styled.span`
   font-family: 'Nunito';
   font-style: normal;
   font-weight: 600;
   font-size: 8px;
   line-height: 11px;
   color: #747488;
   text-transform: capitalize;
`;

function BotaoComIcone({ Icon, text, colorIcon, ...rest }) {
   const IconStyled = styled(Icon)`
      font-size: 1.1vw;
      color: ${colorIcon};
   `;

   return (
      <Container {...rest}>
         <IconStyled />
         <Text>{text}</Text>
      </Container>
   );
};

export default BotaoComIcone;