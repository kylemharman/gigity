import React from "react";
import styled from "styled-components";

const NavBurgerButton = props => {
    return (
        <ButtonStyled onClick={props.clicked} active={props.active}>
            <div></div>
            <div></div>
            <div></div>
        </ButtonStyled>
    );
};

export default NavBurgerButton;

// Styles
export const ButtonStyled = styled.button`
    @media (min-width: 768px) {
        display: none;
    }

    @media (max-width: 768px) {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 30;
        transition: 0.3s ease-out;
        transform: ${props => props.active && "rotate(90deg)"};

        &:focus {
            outline: none;
        }

        div:first-child {
            width: ${props => (props.active ? "1.3rem" : "2rem")};
            transform: ${props => props.active && "rotate(-45deg)"};
            transform-origin: ${props => props.active && "8px 21px"};
        }

        div:nth-child(2) {
            width: ${props => (props.active ? "2rem" : "1.5rem")};
        }

        div:last-child {
            width: ${props => (props.active ? "1.3rem" : "1rem")};
            transform: ${props => props.active && "rotate(45deg)"};
            transform-origin: ${props => props.active && "8px -19px"};
        }

        div {
            height: 2px;
            background-color: ${props => props.theme.color.dark};
            transition: all 0.3s ease-out;
        }
    }
`;
