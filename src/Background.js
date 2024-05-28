import React from "react";
import "./Stylesheet.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsCheckLg} from 'react-icons/bs';
const Background = () => {
  return (
    <div className="bg">
    <Container className="doss">
    <Row>
<Col sm={4}><h4><b><BsCheckLg/> Professional Staff</b></h4>
<p>Our Trained Professional Staff is the best in the business and fully 
qualified to do their job right the first time.</p>
</Col><Col sm={4}><h4><b> <BsCheckLg/>No Hidden Cost</b></h4>
<p>McMahon Group Australia has no hidden cost that will shock you once the job is completed, we are upfront with our 
customers and keep everyone above board and clear from the beginning.</p></Col>
<Col sm={4}><h4><b><BsCheckLg/>Zero Complaints</b></h4> 
<p>Our loyal client base consists of many long-term and repeat business customers consisting of commercial businesses,
 builders, facility managers, real estate agents and more.</p></Col>
<Col sm={4}> <h4><b><BsCheckLg/>On Time Completion</b></h4>
<p>Our on-time completion record is 100% and we work
 hard to maintain that perfect rate. We understand time is important and respect yours.</p>
</Col>
<Col sm={4}>
<h3><b><BsCheckLg/>Detailed Estimated</b></h3>
We strive to be as accurate as possible in our estimates to our clients big 
and small. Our team of estimators make no mistakes and have a proven track record.
</Col>
            </Row>
            </Container>
    </div>
  
  )
}

export default Background;