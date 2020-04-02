import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinks = () => {
    // <NavLink to="/dashboard" activeClassName="active-nav-link navlink">
    //     Dashboard
    // </NavLink>

    return (
        <NavLinksContainer>
            <NavLink
                to="/login"
                activeClassName="active-nav-link"
                className="navlink"
            >
                Login
            </NavLink>
            <NavLink
                to="/register"
                activeClassName="active-nav-link"
                className="navlink"
            >
                Register
            </NavLink>
        </NavLinksContainer>
    );
};

export default NavLinks;

const NavLinksContainer = styled.div`
    .navlink {
        padding: 22px;
        font-size: ${props => props.theme.fontSize.ms};
    }

    .active-nav-link {
        font-weight: 900;
        color: ${props => props.theme.color.primary};
        border-bottom: ${props => `${props.theme.color.primary} 2px solid`};
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin: 50px;

        .active-nav-link {
            border: none;
        }
        .navlink {
            color: ${props => props.theme.color.dark};
            padding: 22px;
            font-size: ${props => props.theme.fontSize.l};
        }
    }
`;
