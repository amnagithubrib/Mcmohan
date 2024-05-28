import React from 'react'
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LL from "./Pic/LL.jpg";
import Man from "./Pic/Man.PNG";
import './Stylesheet.css';
function Career() {
  return (
<Container fluid>
    <Row className='II'><h1><b>Career</b></h1>
    <p className='PP'>___________________________</p></Row>
      <Row><br></br>
        <Col sm={5}><Image className='d' src={LL} style={{paddingTop:100}}></Image></Col>
        <Col sm={5}>
        <h4 style={{paddingTop:100}} className='hj'>McMahon Group Careers</h4>
        <p>Are you a qualified electrician, plumber, tradesman etc? At McMahon Group Australia we are constantly looking for more staff 
        to handle our increasing workload.</p>
<p>If you have the right attitude and are willing to learn and thrive in the industry feel free to
 send us an email at careers@mcmga.com.au</p>
 <Image src={Man}  style={{paddingTop:100}}></Image>
</Col>    
        </Row>
        </Container>
  )
}

export default Career