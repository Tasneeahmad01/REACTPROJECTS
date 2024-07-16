// src/Accordion.js
import React, { useState } from 'react';
// import './Accordion.css';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => handleClick(index)}>
            <span>{openIndex === index ? '-' : '+'}</span>
            <h2>{item.question}</h2>
          </div>
          {openIndex === index && <div className="accordion-content">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
