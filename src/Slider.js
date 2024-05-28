import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import one from '../src/Pic/1.png';
import two from '../src/Pic/2.png';
import three from '../src/Pic/3.png';
import Image from "react-bootstrap/Image";
import Tr from '../src/Pic/Tr.png';
import "./Stylesheet.css";
function Slider() {
  return (
    <div>
   <figure className='position-relative c'>
   
       <Carousel className='carousel-inner' controls={false} indicators={false}>
      
      <Carousel.Item className='item'>
        <img
          className="d-block w-100 images"
          src={one}
          alt="First slide"
        />
      </Carousel.Item>
      
      <Carousel.Item className='item'>
        <img
          className="d-block w-100 images"
          src={two}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img
          className="d-block w-100 images"
          src={three}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <figcaption><Image className='cc' src={Tr}></Image></figcaption>
    </figure>
    </div>
  )
}

export default Slider