import React from 'react'
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import A1 from "./Pic/A1.jpg";
import './Stylesheet.css';
function AboutUs() {
  return (
    <Container fluid>
    <Row className='ee'><h1><b>About</b></h1>
    <p className='kk'>___________________________</p></Row>
      <Row><br></br>
        <Col><Image src={A1} style={{paddingTop:100}} ></Image></Col>
        <Col>
        <h4 style={{paddingTop:100}} className='hj'>About McMahon Group Australia</h4>
        <p>McMahon Group Australia specialises in providing high-quality electrical work for Melbourne’s commercial, construction,
         maintenance and industrial sectors. McMahon Group  bring a fresh, dynamic approach to electrical contracting through a focus
          on servicing and delivering creative electrical solutions to the market. McMahon Group  strives to provide a one-stop shop 
          for all electrical needs, with professional follow up and support every step of the way. As a result, McMahon Group Australia
           are fast becoming one of Melbourne’s most reputable electrical contracting and maintenance business.</p>
<p>McMahon Group Australia deliver a high level of electrical expertise through a professional, well trained, multi-skilled team with proven 
industry experience.  The team’s expertise and knowledge ensure every electrical job is completed to a high standard of workmanship,
 meeting and exceeding client expectations.</p>
<p>McMahon Group  works collaboratively with clients to ensure their expectations are clearly understood. Using the highest quality products
 customer satisfaction is guaranteed, professional electrical advice, dependable service, sound project management and meeting all safety
  and industry standards, Service expectations are achieved through offering clients the full professional and individualized electrical
   service they deserve, accurate upfront pricing, timely completion of work and a genuine endeavour to drive cost efficiencies for clients.
</p>
<p>The same professional approach is employed across all sectors, whether it be commercial, construction or maintenance contracts. We pride
 ourselves on the relationships we have established with our clients. These relationships have been built over many years of quality and
  reliable service. And has created a large number of repetitive clients.</p>
<p>Our loyal client base consists of many long-term and repeat business customers consisting of commercial businesses, builders, facility
 managers, real estate agents and strata management companies throughout Melbourne.</p>
 </Col>
        </Row>
        </Container>
  )
}
export default AboutUs