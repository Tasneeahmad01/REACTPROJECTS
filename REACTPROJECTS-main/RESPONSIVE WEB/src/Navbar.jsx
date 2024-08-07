import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='container-fluid nav_bg'>
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="#">
                Tasneem Technical
              </NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {['/', '/services', '/about', '/contact'].map((path, index) => (
                    <li className="nav-item" key={index}>
                      <NavLink
                        to={path}
                        className={({ isActive }) => `nav-link${isActive ? ' menu_active' : ''}`}
                        aria-current={path === '/' ? 'page' : undefined}
                      >
                        {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
