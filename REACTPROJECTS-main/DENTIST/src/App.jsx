import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Hero from './Hero';
import Cards from './Cards';
import AboutUs from './AboutUs';
import ChooseUs from './ChooseUs'; 
import Testimonials from './Testimonials';
import FeeForm from './FeeForm';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/choose-us" element={<ChooseUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/fee-form" element={<FeeForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
