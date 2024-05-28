import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import {FaSolarPanel} from "react-icons/fa";
import Capture6 from "./Pic/Capture6.png";
import {FaBolt} from "react-icons/fa";
import {FaUnlockAlt} from "react-icons/fa";
import {FaTemperatureLow} from "react-icons/fa";
import {FaGasPump} from "react-icons/fa";
import './Stylesheet.css';
function Grid() {
  return (
    <Container fluid>
      <Row className='CO'>
        <Col style={{paddingTop:50}}><div class="circle">
  <p class="text7"><FaBolt size={30} style={{color:'white'}}/></p>
</div>
        <h4 className='io'>Electrical</h4>
        <p className='pa'>Specializing in multi-story residential dwellings.
         Office/shop fit outs & much more. 
         Our Electrical Team is second to none, 
         professional and ready for any job big or small</p>
        </Col>
        <Col style={{paddingTop:50}}><div class="circle">
  <p class="text7"><FaUnlockAlt size={30} style={{color:'white'}}/></p>
</div>
        <h4 className='io'>Security</h4>
        <p p className='pa'>CCTV, Access Control/intercom & all types of Alarm Systems
         available are supplied and fitted by the Mcmahon Group Australlia.
         We have all the accreditations & knowledge to help secure your Home & Business</p>
        </Col>
        <Col style={{paddingTop:50}}><div class="circle">
  <p class="text7"><FaTemperatureLow size={30} style={{color:'white'}}/></p>
</div>
        <h4 className='io'>Air Conditioning & Heating</h4>
        <p className='pa'>Installations, Service and Maintenance of all Split systems, Multi-head systems, 
        Refrigerated systems and more. No matter the weather we will 
        make you and your family comfortable</p></Col>
        <Col style={{paddingTop:50}}><div class="circle">
  <p class="text7"><FaGasPump size={30} style={{color:'white'}}/></p>
</div> 
        <h4 className='io'>Hazardous areas</h4> 
        < p className='pa'>McMahon Group Australia specialise in Hazardous 
        Area electrical installations and inspections. 
        We have a great deal of hazardous area electrical
         experience in the Chemical, Oil, Gas, and Food industries</p>
        </Col>
        <Col style={{paddingTop:50}}><div class="circle">
  <p class="text7"><FaSolarPanel size={30} style={{color:'white'}}/></p>
</div> 
        <h4 className='io'>Renewable Energy</h4>
        <p className='pa'>McMahon Group Australia specialises in designing systems
         to meet our clients’ needs. Whether your motivation
          is financial or environmental, we work with small businesses
           and home owners to achieve carbon neutral status 
           or alleviate high energy bills</p>
        </Col>
      </Row>
      <Row><Image src={Capture6} style={{paddingTop:50,paddingBottom:50,paddingLeft:100,paddingRight:100}}></Image></Row>
    </Container>
  );
}

export default Grid;