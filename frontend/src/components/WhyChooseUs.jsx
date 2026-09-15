import React from 'react';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: '⚡',
    title: 'Fast Service',
    desc: 'We save your time.',
  },
  {
    icon: '🛡️',
    title: 'Reliable',
    desc: 'You can count on us.',
  },
  {
    icon: '💰',
    title: 'Affordable Prices',
    desc: 'Quality service for everyone.',
  },
  {
    icon: '🤝',
    title: 'Friendly Support',
    desc: 'We are always here to help.',
  },
];

function WhyChooseUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="why-us-container">
        <h2>Why Choose Us</h2>
        <div className="why-us-grid">
          {reasons.map((r, i) => (
            <div className="why-us-card" key={i}>
              <div className="why-us-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

