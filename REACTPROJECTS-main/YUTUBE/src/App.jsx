import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Breakfast from "./Breakfast";
import Evening from "./Evening";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import All from "./All";
import Footer from "./Component/Footer";
import Form from "./Component/Form";
import Login from "./Component/Login"; 


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Breakfast />} />
            <Route path="/breakfast" element={<Breakfast />} />
            <Route path="/evening" element={<Evening />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/dinner" element={<Dinner />} />
            <Route path="/all" element={<All />} />
            <Route path="/order" element={<Form />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
    
      </div>
    </Router>
  );
};

export default App;
