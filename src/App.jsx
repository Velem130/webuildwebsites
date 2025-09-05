import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import About1 from './pages/about1'; 
import Services from './pages/Services'; 
import Prices from './pages/Prices';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about1" element={<About1 />} /> 
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Prices" element={<Prices />} />

     
      </Routes>
        <Footer />
    </div>
  );
}

export default App;

