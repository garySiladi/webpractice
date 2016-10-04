import React from 'react';
import { Navbar, Nav, Image, NavItem } from 'react-bootstrap';
import TabHolder from '../../containers/tabHolder/tabHolder.js';
require("./header.css");

const tabNames = [
    "Blog",
    "Portfolio",
    "About",
    "Contact",
];

const Header = () => (
    <div id="mainNavbar">
        <Navbar fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">
                        <Image className="sitelogo" src={require('../../images/logo.png')}/>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <TabHolder tabs={tabNames}/>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default Header;
