import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const steps = [
  { num: '1', title: 'Tell us what you need', desc: 'Call, WhatsApp or send a message through the form.' },
  { num: '2', title: 'We get it done', desc: 'We handle your request quickly and keep you updated.' },
  { num: '3', title: 'Pay a fair price', desc: 'Clear, affordable prices with no surprises.' },
];

const promises = [
  { icon: '⚡', title: 'Fast', desc: 'We respect your time and work quickly.' },
  { icon: '🛡️', title: 'Reliable', desc: 'When we say we will do it, we do it.' },
  { icon: '🤝', title: 'Friendly', desc: 'No jargon, just clear help you can understand.' },
];

function About() {
  return (
    <>
      <section className="about-hero">
        <span className="about-tag">About us</span>
        <h1>Technology made simple, right here in Kigali</h1>
        <p>
          Oliver Tech Services helps people and small businesses get things
          done: from writing a CV to setting up a phone, fixing Wi-Fi, and
          handling Irembo requests.
        </p>
      </section>

      <section className="about-section">
        <div className="about-container">
          <h2>How it works</h2>
          <div className="about-steps">
            {steps.map((s) => (
              <div className="about-step" key={s.num}>
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-section-alt">
        <div className="about-container">
          <h2>Our promise</h2>
          <div className="about-promises">
            {promises.map((p) => (
              <div className="about-promise" key={p.title}>
                <div className="promise-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          <Link to="/contact" className="about-cta">
            Talk to us today
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;


