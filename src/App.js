// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Footer from '../src/Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import './App.css';
import whatsappIcon from './images/whatsapp.png';
import PopupForm from './Pages/Popupform';


function App() {
  return (
    <Router>
      <PopupForm/>
      <Navbar />
      {/* WhatsApp floating icon */}
      <a
        href="https://wa.me/971581264868"  // Replace with your full number, like 971501234567
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
<img src={whatsappIcon} alt="WhatsApp" />
      </a>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
