import React from 'react'
import {Container,Nav,Navbar} from  'react-bootstrap'
import Image from 'react-bootstrap/esm/Image';
import logo from './Pic/logo.png';
import './Stylesheet.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Menu() {
  return (
        <Navbar bg="dark" style={{paddingRight:0}}  expand="lg">
          <Container>
        <Image  className="demo" src={logo}></Image>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto nav">
                <Nav.Link href="/"  className='menubuttons'><b>Home</b></Nav.Link>
                <Nav.Link href="/about" ><b>About Us</b></Nav.Link>
                <NavDropdown  title=<b className='mer'>Company</b> menuVariant='dark'>
              <NavDropdown.Item href="/Operating"> Operation Structure</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Solutions Management</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Safety</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4">Terms and Condition</NavDropdown.Item>
              <NavDropdown.Item href="#action">
                Privacy and Policy
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title=<b className='mer'>Services</b> menuVariant='dark'>
              <NavDropdown.Item  href="/Electrical"> Electrical</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Security</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Air Conditioning & Heating</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"> Renewable Image</NavDropdown.Item>
            </NavDropdown>
                <Nav.Link href="/project" ><b>Projects</b></Nav.Link>
                <Nav.Link href="/career" ><b>Career</b></Nav.Link>
                <Nav.Link href="/interest" ><b>Interest Free</b></Nav.Link>
                <Nav.Link href="/contact" ><b>Contact us</b></Nav.Link>
                <Nav.Link href="/freequote" ><b>Get a free quote</b></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default Menu