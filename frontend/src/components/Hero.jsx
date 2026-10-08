import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">
        <span className="hero-tag">Kigali's trusted tech partner</span>

        <h1>
          Technology Made <span>Simple</span> for You
        </h1>

        <p className="hero-sub">
          From CVs and phone setup to Wi-Fi help and Irembo services, we get
          you sorted quickly, at a price that makes sense.
        </p>

        <div className="hero-buttons">
          <a href="#services" className="btn-primary">
            Explore Services
          </a>
          <a
            href="https://wa.me/250781843337"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        <div className="hero-badges">
          <span>⚡ Fast service</span>
          <span>🛡️ Reliable</span>
          <span>💰 Affordable prices</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;

