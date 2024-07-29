import React from 'react';
import './Form.css'; 

function Form() {
  return (
    <>
    <h1 className='text-center mt-4'>Order Form</h1>  
    <div className="form-container">
      <form className="row g-3">
        <div className="col">
        <label htmlFor="inputName" className="form-label">Name</label> 
          <input type="text" className="form-control Input" placeholder="First name" aria-label="First name" />
        </div>
        <div className="col">
        <label htmlFor="inputName" className="form-label">Last Name</label>    
          <input type="text" className="form-control Input" placeholder="Last name" aria-label="Last name" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control Input" 
          placeholder="Enter Email" aria-label="Enter Email"
          id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control Input"
          placeholder="Enter Password" aria-label="Password" 
          id="inputPassword4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control Input" id="inputAddress" placeholder="Enter Full Address" />
        </div>
        <div className="col-5">
          <label htmlFor="Contact" className="form-label">Contact Number</label>
          <input type="number" className="form-control Input" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" 
          className="form-control Input"
          placeholder='Enter Near City'
           id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select">
            <option value="">Choose...</option>
            <option value="state1">Nepal</option>
            <option value="state2">Uttar paradesh</option>
            <option value="state2">Uttar paradesh</option>
            <option value="state2">Uttar paradesh</option>
            <option value="state2">Uttar paradesh</option><option value="state2">Uttar paradesh</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Pin Code</label>
          <input type="text" className="form-control Input" id="inputZip" />
        </div>
       
        <div className="col-12">
          <button type="submit" className="btn btn-primary p-2 Btn">Submit</button>
        </div>
      </form>
       
    </div>

    </>
  );
}

export default Form;
