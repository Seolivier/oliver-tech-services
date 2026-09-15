import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services onServiceClick={handleServiceClick} />
      <WhyChooseUs />
      <Contact selectedService={selectedService} />
      <Footer />
    </div>
  );
}

export default App;


