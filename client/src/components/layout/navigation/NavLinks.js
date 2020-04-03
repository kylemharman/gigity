import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinks = props => {
    return (
        <NavLinksContainer>
            {!props.isAuthenticated ? (
                <React.Fragment>
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
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <NavLink
                        to="/dashboard"
                        activeClassName="active-nav-link"
                        className="navlink"
                    >
                        Dashboard
                    </NavLink>
                    <button onClick={props.logout} className="logout-button">
                        Logout
                    </button>
                </React.Fragment>
            )}
        </NavLinksContainer>
    );
};

export default NavLinks;

const NavLinksContainer = styled.div`
    .navlink {
        padding: 22px;
        font-size: ${props => props.theme.fontSize.ms};
    }

    .logout-button {
        font-size: ${props => props.theme.fontSize.ms};
        font-family: ${props => props.theme.fontFamily.family};
        background-color: transparent;
        outline: 0;
        cursor: pointer;
        border: none;
        font-weight: 300;
        padding: 0 22px;
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
        .navlink,
        .logout-button {
            color: ${props => props.theme.color.dark};
            font-size: ${props => props.theme.fontSize.l};
            padding: 22px;
            text-align: left;
        }
    }
`;
