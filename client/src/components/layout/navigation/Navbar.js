import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

import NavLinks from "./NavLinks";
import NavBurgerButton from "./NavBurgerButton";
import NavOverlay from "./NavOverlay";

const Navbar = props => {
    const [mobileMenuState, setMobileMenuState] = useState(false);
    const { user, isAuthenticated } = props.auth;

    const onLogoutHandler = e => {
        e.preventDefault();
        props.logoutUser();
    };

    const toggleMenuHandler = () => {
        setMobileMenuState(!mobileMenuState);
    };

    return (
        <header>
            <NavStyled>
                <div>
                    <Link to="/">Gigity</Link>
                </div>
                <div className="desktop-navlinks">
                    <NavLinks
                        logout={onLogoutHandler}
                        isAuthenticated={isAuthenticated}
                    />
                </div>
                <NavOverlay
                    clicked={toggleMenuHandler}
                    active={mobileMenuState}
                >
                    <NavLinks
                        logout={onLogoutHandler}
                        isAuthenticated={isAuthenticated}
                    />
                </NavOverlay>
                <NavBurgerButton
                    clicked={toggleMenuHandler}
                    active={mobileMenuState}
                />
            </NavStyled>
        </header>
    );
};

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);

// Styles
const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 24px 50px;
    border-bottom: ${props => `${props.theme.color.lightGrey} 1px solid`};

    .desktop-navlinks {
        @media (max-width: 768px) {
            display: none;
        }
    }

    @media (max-width: 768px) {
        border-bottom: none;
    }

    @media (max-width: 425px) {
        padding: 26px;
    }
`;
