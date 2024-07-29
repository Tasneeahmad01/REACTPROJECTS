import React, { useState } from 'react';
import './Login.css'; 

const Login = ({ onLogin }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
    setIsModalOpen(false); 
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} style={{ width: 'auto' }}>
        Login
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content animate">
            <span
              onClick={() => setIsModalOpen(false)}
              className="close"
              title="Close Modal"
            >
              &times;
            </span>
            <div className="imgcontainer">
              <img
                src="https://media.istockphoto.com/id/933418408/photo/cartoon-face.jpg?s=612x612&w=0&k=20&c=_4u_XXpU4ftU6QX_7_CT6GwOAV0MNxYNriAPWUFGl_U="
                alt="Avatar"
                className="avatar"
              />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                />

                <label htmlFor="psw"><b>Password</b></label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />
                <label>
                  <input type="checkbox" name="remember" className='Check'/>&nbsp;
                  Remember me
                </label><br />
                <button type="submit">Login</button>
                
              </div>

              <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="cancelbtn"
                >
                  Cancel
                </button>
                <span className="psw">
                  Forgot <a href="#">password?</a>
                </span>
              </div>
            </form>
            <br /><br /><br />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
