import React from 'react';
import "./About.css";

function AboutUs() {
  return (
    <>
      <div className="Main-div">
        <div className="child-div">
          <img src="https://media.istockphoto.com/id/638414340/photo/child-in-dental-chair.webp?b=1&s=170667a&w=0&k=20&c=QmRXCGIMt3I3O6_HZm_0TFNWcUl1abMuiaWphf4urEM=" alt="Dental Care" />
          </div>
          <div className="text-content">
            <span className="About">About Us</span>
            <h2>Patient-Centered Care</h2>
            <p>We are dedicated to providing exceptional dental care in a warm and welcoming environment. Our team of experienced, compassionate, and highly skilled professionals is here to ensure your dental experience is comfortable and stress-free.</p>
            <h3>Our Mission</h3>
            <p>At 57Dentcare, our mission is to promote optimal oral health and create lasting, confident smiles.</p>
           <a href=""><button className='Btn'>Learn More <i class="fa-solid fa-arrow-down"></i></button></a>
          </div>
        </div>
      

    </>
  );
}

export default AboutUs;
