import React from 'react'
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Os from "./Pic/Os.jpg";
import './Stylesheet.css';
function Operating() {
    return (
      <Container fluid>
      <Row className='boot4'><h1><b>Operation Structure</b></h1>
      <p className='boot5'>___________________________</p></Row>
        <Row><br></br>
          <Col sm={5}><Image className='bro' src={Os} style={{paddingTop:100}}></Image></Col>
          <Col sm={5} className='sis'>
          <h4 style={{paddingTop:100}}className='hj'>Operation Structure</h4>
          <p>McMahon Group Australia’s operational structure has been designed to enable flexibility and responsiveness 
          to changing requirements, important deadlines and workloads across all areas of our business. Our team structure 
          consists of Contract Managers, Project Managers, Installation and Service teams.</p>
  <p>The coordination of our service personnel to site is handled by our McMahon Group Australia Service Desk</p>
  <p>Our Service Desk coordinates and dispatches our electricians to sites as required. The Service Desk also 
  coordinates with our clients for any after-hours request, which include weekends and public holidays</p>
  <p>McMahon Group Australia have service technicians available 24/7 on a rotating roster and within this roster
   two levels of backup exists for redundancy. If the on-call technician is on a job already we have a second technician available.
    In addition, our operational managers are also on call if they are needed.</p>
   
  </Col>
          </Row>
          </Container>
    )
  }
  
  export default Operating