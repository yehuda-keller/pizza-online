import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import cartIcon from '../image/carticon.png';

const NavBar = () => {
    const navStyle = {
        color: 'green'
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/" style={navStyle}>PIZZA ONLINE!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" style={navStyle}>HOME</Nav.Link>
                        <Nav.Link as={Link} to="/menu" style={navStyle}>PIZZA PLANS!</Nav.Link>
                        <Nav.Link as={Link} to="/blog" style={navStyle}>BLOG</Nav.Link>
                        <Nav.Link as={Link} to="/cart" style={navStyle}>
                            <img src={cartIcon} alt="Cart" width="30" height="30" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
