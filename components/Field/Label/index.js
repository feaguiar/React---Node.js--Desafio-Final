import styled from "@emotion/styled";

const Label = styled.label`
    display: flex;
    flex-direction: column;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    color: #3F3F55;
    flex-basis: ${ ({basic})=> basic || "auto" };
    flex-shrink: ${ ({shrink})=> shrink || 1 };
    flex-grow: ${ ({grow})=> grow || 1 };
`

export default Label;