 
import React from 'react';
import './About.css';
import img3 from './images/img3.jpg'; 
import Common from './Common';
function About() {
  return (
    <>
      <Common name ="Welcome to About page"
       imgsrc={img3}
        visit="/contact" 
        btname="Contact Now"/> 
    </>
  );
}

export default About;
