import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="Text">
      <div className="hero">
        <div className="hero-text">
          <h2 className="text">Dental Excellence Starts Here: Your Guide to a Brighter, Healthier Smile</h2>
          <button className="booking-btn">Booking Now</button>
        </div>
        <div className="hero-image">
          <img 
            src="https://media.licdn.com/dms/image/D4E03AQGS7x1P876Jcg/profile-displayphoto-shrink_800_800/0/1689524955623?e=1727913600&v=beta&t=bD_zcMDTt6Z9sl0YF__9bT4Wo9fl2Ncc8eCqnVpTx80" 
            alt="Hero" 
            className='img3'
          />
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <img src="https://media.istockphoto.com/id/641426684/vector/medicin-icon.jpg?s=612x612&w=0&k=20&c=FsWDKI321yOjon83l_NuXovHmjUWTtCk6f5otqmNhHc=" alt="Card Image" className='img3'/>   
          <h3>Free Consultation</h3>
          <p>We offer flexible appointment scheduling and free to accommodate your busy life</p>
        </div>
        <div className="card1">
          <img src="https://media.istockphoto.com/id/894571032/vector/stethoscope-icon-special-orange-square-button.jpg?s=612x612&w=0&k=20&c=87mvdN9iJAQCdELMdIeiB_3PbiYRNlGG9Q0nPInCfJw=" alt="Card Image" className='img3'/>   
          <h3>Expert Dentist</h3>
          <p>Our team of experienced dentists and dental professionals boasts years of expertise in various areas of dentistry</p>
        </div>
        <div className="card1">
          <img src="https://media.istockphoto.com/id/1159011567/photo/green-and-golden-star-button-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=wmhQSYV026tareehUYHo_t_8rpcGhyNW6_oVI3LpGWM=" alt="Card Image" className='img3'/>   
          <h3>Free Consultation</h3>
          <p>We offer flexible appointment scheduling and free to accommodate your busy life</p>
        </div>
        <div className="card1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNs5ykPcMHrIy6LokJzBgPQH43CWWYgoAd4UFNO-w3J5XOTgub8q-urXT-RnUi7TAKbs8&usqp=CAU" alt="Card Image" className='img3'/>   
          <h3>Free Consultation</h3>
          <p>We offer flexible appointment scheduling and free to accommodate your busy life</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
