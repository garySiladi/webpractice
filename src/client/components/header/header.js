import React from 'react';
import { Navbar, Nav, Image, NavItem } from 'react-bootstrap';
import { browserHistory, Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
require("./header.css");

const tabNames = [
    "About",
    "Portfolio",
    "Blogposts"
];

const Header = () => (
    <div className="mainNavbar">
        <Navbar>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to={{ pathname: '/'}}>
                  <NavItem eventKey={1}>About</NavItem>
                </LinkContainer>
                <LinkContainer to={{ pathname: '/portfolio'}}>
                  <NavItem eventKey={2}>Portfolio</NavItem>
                </LinkContainer>
                <LinkContainer to={{ pathname: '/blogposts'}}>
                  <NavItem eventKey={3}>Blogposts</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default Header;
