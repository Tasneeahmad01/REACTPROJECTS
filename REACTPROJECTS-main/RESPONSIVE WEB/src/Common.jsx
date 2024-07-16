 
import React from 'react';
import './About.css';
import img2 from './images/img2.jpg'; 
import {NavLink} from "react-router-dom"

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center justify-content-center">
        <div className='container-fluid nav_bg'>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                <strong className="Strong"> ThapaTechnical</strong></h1>
                  
                  <h2 className="my-3">We are the team of talented developers making websites with practicaly technology.
                  
                  </h2>
                  <div className="mt-3">
                    <NavLink to href={props.visit} className="btn-get-started">{props.btname}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img d-flex align-items-center">
                  <img src={img2} className="img-fluid animated" alt="home img" />
                </div>
              </div>

             










            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
