import React from 'react';
import './FeeForm.css';

function FeeForm() {
  return (
    <>
      <div className="Form-item">
        <div className="Content">
          <img 
            src="https://media.istockphoto.com/id/172793950/photo/taking-notes.jpg?s=612x612&w=0&k=20&c=yq6GWRh4VfZec8W-yzwI3li0Qr6SaC1zM7hxaW44-ZA=" 
            alt="Pediatrician" 
          />
        </div>
        <div className='Input'>
          <h1 className='Heading'>Fee Consultation</h1>
          <div className="Input-grid">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Message" />
          </div><br />
          <a href=""><button className='Free-btn'>Get a Free Consultation</button></a>
        </div>
      </div>
    </>
  );
}

export default FeeForm;
