import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div>
            <h3>Oliver Tech Services</h3>
            <p>Fast Help. Smart Solutions.</p>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
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






