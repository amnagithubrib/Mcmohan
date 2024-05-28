import React from 'react'
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import P1 from "./Pic/P1.jpg";
import P2 from "./Pic/P2.jpg";
import P3 from "./Pic/P3.jpg";
import P4 from "./Pic/P4.jpg";
import P5 from "./Pic/P5.jpg";
import P6 from "./Pic/P6.jpg";
import "./Stylesheet.css"
function Project() {
  return (
    <Container fluid>
    <Row className='ee' style={{paddingLeft:0}}><h1><b>Project</b></h1>
    <p className='kk'>___________________________</p></Row>
      <Row><br></br>
        <Col><Image  className='boot3' src={P1} style={{paddingTop:100}} ></Image></Col>
        <Col><Image className='boot3' src={P2} style={{paddingTop:100}} ></Image></Col>
        <Col><Image  className='boot3'src={P3} style={{paddingTop:100}} ></Image></Col>
        </Row>
        <Row><Col> <Image className='boot3' src={P4} style={{paddingTop:20}} ></Image></Col>
        <Col><Image className='boot3' src={P5} style={{paddingTop:20}} ></Image></Col>
        <Col> <Image className='boot3' src={P6} style={{paddingTop:20}} ></Image></Col>
        </Row>
        </Container>
        
  )
}

export default Project