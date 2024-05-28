import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {GoLocation} from 'react-icons/go'; 
import {FiPhone} from 'react-icons/fi';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {ImFacebook} from 'react-icons/im';
function Menu2() {
    return(
        <Navbar collapseOnSelect expand="lg"  variant ="dark" style={{background:'black',color:'white'}}>
        <Container style={{height:'15px',fontSize:'small'}}>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto1">
              <Nav.Link href="https://www.helpmecovid.com/au/location/361472_mcmahon-group-australia" style={{color:'white'}}><GoLocation style={{color:'red'}}/> Melbourne, Victoria Australia</Nav.Link>
              <Nav.Link href=""  style={{color:'white'}}><AiOutlineClockCircle  style={{color:'red',width:'1rem',height:'1rem'}} /> Monday-Friday 9am-5pm</Nav.Link>
              <Nav.Link href=""  style={{color:'white'}}><FiPhone  style={{color:'red',width:'1rem',height:'1rem'}} /> 1300 85 16 17</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="https://www.instagram.com/mcmahon.group/?hl=en" style={{paddingLeft:300}}> <AiOutlineInstagram style={{color:'white'}}/></Nav.Link>
              <Nav.Link eventKey={2} href="https://www.facebook.com/McMahonGroupAustralia">
              <ImFacebook style={{color:'white'}}/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
        
   
}

export default Menu2