import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import './Home.css';

const highlights = [
  { icon: '📝', title: 'Typing & CV Writing', desc: 'Professional CVs, letters and reports.' },
  { icon: '📱', title: 'Phone Setup & Apps', desc: 'Apps, accounts and data transfer.' },
  { icon: '🏛️', title: 'Irembo Services', desc: 'NID, certificates, licenses and more.' },
];

function Home() {
  return (
    <>
      <Hero />

      <section className="home-teaser">
        <div className="home-teaser-container">
          <span className="teaser-tag">Popular services</span>
          <h2>What we can help you with</h2>

          <div className="teaser-grid">
            {highlights.map((h) => (
              <div className="teaser-card" key={h.title}>
                <div className="teaser-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>

          <Link to="/services" className="teaser-link">
            View all services →
          </Link>
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
}

export default Home;

