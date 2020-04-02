import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import NavBurgerButton from "./NavBurgerButton";
import NavOverlay from "./NavOverlay";

const Navbar = () => {
    const [mobileMenuState, setMobileMenuState] = useState(false);

    const toggleMenuHandler = () => {
        setMobileMenuState(!mobileMenuState);
    };

    return (
        <header>
            <NavStyled>
                <div>
                    <Link to="/">Gigity</Link>
                </div>
                <div className="desktop-nav">
                    <NavLinks />
                </div>
                <NavOverlay
                    clicked={toggleMenuHandler}
                    active={mobileMenuState}
                >
                    <NavLinks />
                </NavOverlay>
                <NavBurgerButton
                    clicked={toggleMenuHandler}
                    active={mobileMenuState}
                />
            </NavStyled>
        </header>
    );
};

export default Navbar;

// Styles

const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 24px 50px;
    border-bottom: ${props => `${props.theme.color.lightGrey} 1px solid`};

    .desktop-nav {
        @media (max-width: 768px) {
            display: none;
        }
    }

    @media (max-width: 425px) {
        padding: 26px;
    }
`;
