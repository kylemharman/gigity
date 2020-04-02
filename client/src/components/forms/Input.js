import React from "react";
import styled from "styled-components";

const Input = props => (
    <InputStyled
        onChange={props.onChange}
        value={props.value}
        error={props.error}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
    />
);

export default Input;

// Styles
const InputStyled = styled.input`
    appearance: none;
    outline: 0;
    border: ${props =>
        !props.className
            ? `${props.theme.color.grey} 1px solid`
            : `${props.theme.color.danger} 1px solid`};
    width: 100%;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    text-align: center;
    font-size: ${props => props.theme.fontSize.ms};
    transition-duration: 0.3s;
    color: ${props => props.theme.color.dark};

    &::-webkit-input-placeholder {
        color: ${props => props.theme.color.darkGrey};
    }

    &:focus {
        color: ${props => props.theme.color.dark};

        &::-webkit-input-placeholder {
            color: ${props => props.theme.color.light};
        }
    }
`;
