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
        <span className="why-tag">Why Oliver Tech</span>
        <h2>Why Choose Us</h2>
        <p className="why-subtitle">
          Simple, honest tech help from people who care about getting it right.
        </p>

        <div className="why-us-grid">
          {reasons.map((r, i) => (
            <div className="why-us-card" key={i}>
              <div className="why-us-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="why-cta">
          <div className="why-cta-text">
            <h3>Need help? We've got you covered!</h3>
            <p>One call, many solutions. We make it easy.</p>
          </div>
          <a href="#contact" className="why-cta-btn">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

