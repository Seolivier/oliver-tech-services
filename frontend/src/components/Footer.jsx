import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
  <svg className="logo-icon" width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#00c6ff"/>
    <path d="M16 6L9 17H15L14 26L23 14H17L16 6Z" fill="#0a1128"/>
  </svg>
  <div>
            <h3>Oliver Tech Services</h3>
            <p>Fast Help. Smart Solutions.</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="https://wa.me/250781843337" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="tel:+250781843337">Call</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Oliver Tech Services — Kigali, Rwanda. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;



