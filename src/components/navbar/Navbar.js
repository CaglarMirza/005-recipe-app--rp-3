import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <Logo to="/home">
                <i>{"<CAGLAR>"}</i>
                <span>recipe</span>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>

            <Menu isOpen={isOpen}>
                <MenuLink to="/about">about</MenuLink>
                {/* <MenuLink to={{ pathname: "https://github.com/CaglarMirza" }}>Github</MenuLink> */}
                <MenuLink to="//github.com/CaglarMirza" target="_blank">
                    Github
                </MenuLink>

                <MenuLink to="/">Logout</MenuLink>
            </Menu>
        </Nav>
    );
};

export default Navbar;
