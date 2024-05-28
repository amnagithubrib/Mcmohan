import React from 'react'
import Slider from "./Slider"
import Grid from "./Grid"
import Grid1 from "./Grid1"
import Background from './Background';
import Form from './Form';


function Home() {
  return (
    <div>
    {/* <Menu/> */}
    <Slider/>
    <Grid/>
    <Background/>
    <Grid1/>
    <Form/>
   
    
    </div>
   
  );
 
}

export default Home