import React from 'react'
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import El from "./Pic/El.jpg";
import Gu from "./Pic/Gu.PNG";
import "./Stylesheet.css"
function Electrical() {
    return (
        <Container>
        <Row><br></br>
        <Col sm={5}><Image className='d' src={El} style={{paddingTop:100}}></Image></Col>
        <Col sm={5}>
        <h4 style={{paddingTop:100}}className='hj'>Electrical</h4>
        <p>McMahon Group Australia always maintain the highest standard of electrical work, reliable and quick 
        service and competitive prices. These goals are achieved through focusing on the following key elements.</p>
<p>Continual training in the latest technologies, equipment and standards, Detailed planning and understanding 
of service requirements through open communication, Customer focused, Providing practical and knowledgeable electrical
 advice commensurate to the project or task, Innovative design solutions, Aiming for long term commitment to our clients 
 and their electrical needs, not short term gain</p>
 
 <p>The services our team handles on a daily basis within the electrical field.</p>
 <p>-Specializing in multi-story residential dwellings</p>
 <p>-Office/shop fit outs</p>
 <p>-Main switchboard upgrades</p>
 <p>-Emergency 24/7 service</p>
<p>-Lighting Design</p>
<p>-Exit & Emergency Lighting</p>
<Row><Col sm={8}></Col>
    <Col sm={3}>
    <Image src={Gu}></Image>
    </Col>
</Row>

</Col>
        </Row>
        </Container>
    )
}

export default Electrical
