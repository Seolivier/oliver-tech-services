import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Technology Made <span>Simple</span> for You!</h1>
        <p>Your trusted tech partner in Kigali — fast help, smart solutions.</p>
        <div className="hero-badges">
          <span>⚡ Fast</span>
          <span>🛡️ Reliable</span>
          <span>💰 Affordable</span>
        </div>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Get Help Now</a>
          <a href="https://wa.me/250781843337" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

