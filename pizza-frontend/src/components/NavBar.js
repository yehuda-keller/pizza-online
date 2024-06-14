import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, Form, Button, Row, Col } from 'react-bootstrap';
import cartIcon from '../image/carticon.png';

const NavBar = ({ setOrderId }) => {
    const navStyle = {
        color: 'green'
    };

    const [searchOrderId, setSearchOrderId] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchOrderId) {
            setOrderId(searchOrderId);
            navigate(`/order/${searchOrderId}`);
            setSearchOrderId(''); // Reset search input
        }
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
                        <Nav.Link as={Link} to="/infoComponent" style={navStyle}>INFO</Nav.Link>
                        <Nav.Link as={Link} to="/cart" style={navStyle}>
                            <img src={cartIcon} alt="Cart" width="30" height="30" />
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSearch}>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search by order id"
                                    className="mr-sm-2"
                                    value={searchOrderId}
                                    onChange={(e) => setSearchOrderId(e.target.value)}
                                />
                            </Col>
                            <Col xs="auto">
                                <Button variant="outline-success" type="submit">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
