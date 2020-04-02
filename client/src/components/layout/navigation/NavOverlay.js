import React from "react";
import styled from "styled-components";

const NavOverlay = props => {
    return (
        <NavOverlayContainer onClick={props.clicked} active={props.active}>
            {props.children}
        </NavOverlayContainer>
    );
};

export default NavOverlay;

const NavOverlayContainer = styled.div`
    @media (min-width: 768px) {
        display: none;
    }

    @media (max-width: 768px) {
        display: flex;
        overflow-x: hidden;
        background-color: rgba(252, 252, 252, 0.95);
        /* border-bottom: 1px solid blue; */
        height: ${props => (props.active ? "100vh" : "0")};
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
        transition: 0.3s ease-in;
    }
`;
