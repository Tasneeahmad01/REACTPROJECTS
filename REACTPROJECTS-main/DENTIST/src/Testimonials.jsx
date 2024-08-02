import React from 'react'
import "./Testimonials.css"

function Testimonials() {
  return (
    <>
      <div className="Image-container">
        <div className="Items">  
          <span>Testimonials
          <h2>What People Say About Us</h2>
          </span>
          
          <div className="testimonial-content">
            <img src="https://media.istockphoto.com/id/1799691183/photo/smile-doctor-face-and-portrait-of-man-in-hospital-with-for-wellness-medicine-and-medical-care.jpg?s=612x612&w=0&k=20&c=qH9B80s6zVJQQ-bigDoS4JrlkC3VARKlFX5xbYjL6pc=" alt="" />
          </div>
          <div className="testimonial-text">
            <i className="fa-regular fa-circle-left"></i>
            <h1>"In an emergency situation, I was amazed by <br /> how quickly they accommodated me. The <br />dentist's skill and compassion were evident.<br/> I'm grateful for their prompt care."</h1>
            <i className="fa-regular fa-circle-right"></i>
          </div>&nbsp;
          <p className='p1'>David Gahan</p>
          <p className='p2'>Detroit,Michigan</p> 

        </div>   
      </div>
    </>
  )
}

export default Testimonials
