import React from 'react';
import './Services.css';
import Card from './Card'; 
import CardData from './CardData';

function Services() {
  return (
    <>
      <div className="my-4">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {CardData.map((card, index) => (
                <Card 
                  key={index}
                  imgSrc={card.imgSrc}
                  title={card.title}
                  text={card.text}
                  link={card.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
