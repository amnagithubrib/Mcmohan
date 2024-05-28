import React from 'react'
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Capture6 from "./Pic/Capture6.png";
import './Stylesheet.css';
function Interest() {
  return (
    <Container fluid>
    <Row className='boot6'><h1><b>Interest free</b></h1>
    <p className='boot7'>___________________________</p></Row>
      <Row><br></br>
        <Row><Image  ClassName='z' src={Capture6} style={{paddingTop:100}}></Image></Row>
        <Row>
        <h4 style={{paddingTop:100}}><b>Interest free</b></h4>
      <h6><p>Here at McMahon Group Australia, we have partnered with leading finance terms provider,
        SKYE to provide 6x and 12x monthinterest-free terms on all new installations and works 
       provided by the McMahon Group Australia team.</p></h6>  


</Row> 
 </Row>
        </Container> 
  )
}

export default Interest