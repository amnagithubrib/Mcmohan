import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Capture9 from "./Pic/Capture9.png";
import "./Stylesheet.css";
import { FaReact } from 'react-icons/fa';
import { AiFillBulb } from 'react-icons/ai';
function Grid1() {
  return (
    <Container className='i'>
      <Row>
        <Col  ClassName='s'  sm={6}><br></br><br></br><br></br><h2 className='ter'>About Us</h2> <br></br>
        <p>McMahon Group Australia specializes in providing high-quality electrical
           work for Melbourne’s
          commercial, construction, maintenance and 
          industrial sectors. McMahon Group Australia 
          bring a fresh, dynamic approach to electrical
           contracting through a focus on servicing and delivering
            creative electrical solutions to the market. McMahon Group 
            Australia strives to provide a one-stop shop for all electrical 
            needs, with professional follow up and support every step of the way. 
            As a result, McMahon Group Australia are fast becoming 
            one of Melbourne’s most reputable electrical 
            contracting and maintenance business</p>
            <Row>
            <br></br>
            <Col><h2 className='ter'><AiFillBulb/>Our Vision</h2> 
            <p>McMahon Group Australiaia work collaboratively
             with clients to ensure their expectations are clearly 
             understood. Using the highest quality products customer
              satisfaction is guaranteed, professional electrical advice,
               dependable service etc</p></Col>
            <Col><h2 className='ter'><FaReact />Our Mission</h2>
            <p>The same professional approach is employed across
             all sectors, whether it be commercial, construction 
             or maintenance contracts. We pride ourselves on the 
             relationships we have established with our clients</p>
            </Col>
            </Row></Col>
            
            <Col><Image sm={6} src={Capture9} className="imag"></Image></Col>
      
      </Row>
    </Container>
  );
}

export default Grid1;