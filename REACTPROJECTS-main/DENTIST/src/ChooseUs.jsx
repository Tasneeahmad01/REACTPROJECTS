import React from 'react';
import './ChooseUs.css';  

const ChooseUs = () => {
  return (
    <>
      <div className="Choose">
        <div className="inner-choose">
          <span style={{paddingLeft:"70px"}}>Why Choose Us
            <h1 style={{paddingLeft:"70px", alignItems:"center"}}>Comprehensive Dental Services</h1>
          </span>
          <div className="content-container">
            <div className="text-container">
              <div className="text-item">
                <div className="circle">
                  <i className="fa-solid fa-check"></i>
                </div>
                <p><b>Experienced Professionals:</b> Our team consists of highly skilled and knowledgeable dental experts.</p>
              </div>
              <div className="text-item">
                <div className="circle">
                  <i className="fa-solid fa-check"></i>
                </div>
                <p><b>Personalized Care:</b> We tailor our services to meet the individual needs of each patient.</p>
              </div>
              <div className="text-item">
                <div className="circle">
                  <i className="fa-solid fa-check"></i>
                </div>
                <p><b>Advanced Technology:</b> We use the latest dental technology to ensure the best outcomes.</p>
              </div>
              <div className="text-item">
                <div className="circle">
                  <i className="fa-solid fa-check"></i>
                </div>
                <p><b>Comfortable Environment:</b> Our clinic is designed to provide a relaxing and comfortable experience.</p>
              </div>
              <div className="text-item">
                <div className="circle">
                  <i className="fa-solid fa-check"></i>
                </div>
                <p><b>Comprehensive Services:</b> We offer a wide range of dental services to meet all your needs.</p>
              </div>
            </div>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/16f72e_c04cd108dd554a70bd4a412cfdeef54e~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/16f72e_c04cd108dd554a70bd4a412cfdeef54e~mv2.jpg" alt="Dental Services" />
            </div>
          </div>
        </div>
      </div>
      <br/>   <br/>   <br/>   <br/>
    </>
  );
}

export default ChooseUs;
