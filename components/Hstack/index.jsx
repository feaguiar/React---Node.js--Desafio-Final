import styled from "@emotion/styled";

const HStack = styled.div`
    display: flex;
    margin-top: ${ ({mt}) => mt || "0px" };
    margin-bottom: ${ ({mb}) => mb || "0px" };
    margin-left: ${ ({ml}) => ml || "0px" };
    margin-right: ${ ({mr}) => mr || "0px" };
    flex-direction: row;
    justify-content: ${ ({justify}) => justify || "space-between" };
    gap: ${ ({gap}) => gap ? gap : "" };
`

export default HStack;