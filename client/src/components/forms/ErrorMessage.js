import React from "react";
import styled from "styled-components";

const ErrorMessage = props => {
    return <PStyled>{props.children}</PStyled>;
};

export default ErrorMessage;

const PStyled = styled.p`
    color: ${props => props.theme.color.danger};
    margin: 0 0 10px 0;
`;
