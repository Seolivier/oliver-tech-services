import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import About from './pages/About.jsx';
import ContactPage from './pages/ContactPage.jsx';
import './App.css';

function App() {
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  const handleServiceClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
    navigate('/contact');
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={<ServicesPage onServiceClick={handleServiceClick} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<ContactPage selectedService={selectedService} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;





