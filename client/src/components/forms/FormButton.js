import React from "react";
import styled from "styled-components";

const FormButton = props => (
    <ButtonStyled type={props.type}>{props.children}</ButtonStyled>
);

export default FormButton;

// Styles
const ButtonStyled = styled.button`
    display: block;
    appearance: none;
    outline: 0;
    padding: 10px 15px;
    border: ${props => props.theme.color.primary} 1px solid;
    background-color: white;
    color: ${props => props.theme.color.primary};
    border-radius: 3px;
    width: 100%;
    cursor: pointer;
    font-size: ${props => props.theme.fontSize.ms};
`;
