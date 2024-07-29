// src/pages/Breakfast.jsx
import React from "react";
import MenuData from "./Component/MenuData";
import './Component/Menu.css';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Breakfast = () => {
  return (
    <>
      <div className="card-container">
        {MenuData.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="card-image" />
            <div className="card-body">
              <div className="card-number-container">
                <span className="card-number subtle">{item.id}</span>
              </div>&nbsp;
              <span className="card-author subtle">{item.category}</span>
              <h1 className="card-title">{item.name}</h1>
              <span className="card-description subtle">{item.description}</span>
              <div className="card-price subtle">{item.price}</div>
              <a href="#"><div className="card-read">Read...</div></a>  
            </div>
            <Link to="/order"><button className="card-tag subtle">Order Now</button></Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Breakfast;
