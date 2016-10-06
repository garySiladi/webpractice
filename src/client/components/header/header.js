import React from 'react';
import { Navbar, Nav, Image, NavItem } from 'react-bootstrap';
import TabHolder from '../../containers/tabHolder/tabHolder.js';
require("./header.css");

const tabNames = [
    "About",
    "Portfolio",
    "Blogposts"
];

const Header = () => (
    <div className="mainNavbar">
        <Navbar staticTop inverse>
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
