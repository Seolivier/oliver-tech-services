import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
  <svg className="logo-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#00c6ff"/>
    <path d="M16 6L9 17H15L14 26L23 14H17L16 6Z" fill="#0a1128"/>
  </svg>
  <div>
            <h1>Oliver Tech Services</h1>
            <p>Fast Help. Smart Solutions.</p>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#why-us" onClick={closeMenu}>Why Us</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;

