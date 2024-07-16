import React from 'react';

function Card({ imgSrc, title, text, link }) {
  return (
    <div className="col-md-3 col-10 mx-auto">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
