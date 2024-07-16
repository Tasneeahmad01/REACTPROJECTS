 
import React from 'react';
import './Home.css';
import img2 from './images/img2.jpg'; 
import Common from './Common';

function Home() {
  return (
    <>
      <Common   name = "Grow your business with"
       imgsrc={img2}
        visit="/about" 
        btname="Get Started"/>
    </>
  );
}

export default Home;
