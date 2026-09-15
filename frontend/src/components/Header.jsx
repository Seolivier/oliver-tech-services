import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">⚡</span>
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

