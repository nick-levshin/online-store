import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE, BASKET_ROUTE } from '../../../utils/consts';

const MyNavbar: React.FC = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink className="text-white text-decoration-none" to={SHOP_ROUTE}>
            Shoppy
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink style={{ marginRight: 10 }} to={SHOP_ROUTE}>
              Home
            </NavLink>
            <NavLink style={{ marginRight: 10 }} to={BASKET_ROUTE}>
              Basket
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
