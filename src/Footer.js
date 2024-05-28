import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import logo from './Pic/logo.png';
import Nav from 'react-bootstrap/Nav';
import { IoLogoFacebook } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";



import "./Stylesheet.css";

function Footer() {
    return (
        <Container fluid className="boots2"><Row>
        <Col sm={1}></Col>
        <Col sm={3}>
<Image className="boots" src={logo}></Image>
<p className="boots1">McMahon Group Australia specializes in providing high-quality electrical work for Melbourne’s commercial, industrial and construction sectors. Group Australia bring a fresh, dynamic approach to electrical contracting through a focus on servicing and 
delivering creative electrical solutions to the market.</p>


        </Col>
        
        <Col sm={4}><h1><b>Information</b></h1>
    <p><ul><li><Nav.Link href="#">Electical</Nav.Link></li></ul></p>
    <p><ul><li><Nav.Link href="#">Security</Nav.Link></li></ul></p>
    <p><ul><li><Nav.Link href="#">Air Condition and Heating</Nav.Link></li></ul></p>
    <p><ul><li><Nav.Link href="#">solutions Management</Nav.Link></li></ul></p>
    <p><ul><li><Nav.Link href="#">Operation Structure</Nav.Link></li></ul></p>
    <p><ul><li><Nav.Link href="#">Hazardous</Nav.Link></li></ul></p>
    <p><ul><li><Nav.Link href="#">Renewable Energy</Nav.Link></li></ul></p>
    </Col>
    
    
<Col sm={4}>
<h1><b>Contact Us</b></h1>
<p>Melbourne, Victoria Australia</p>
<p>________________________</p>
<p><h3>Phone:</h3></p>
<p> 03335189564</p>
<p>________________________</p>
<p>Email:</p>
<p>sales@mcmga.com.au</p>
<p><IoLogoFacebook size={30} />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsInstagram size={30} /></p>
</Col>
        </Row></Container>
    )
}

export default Footer