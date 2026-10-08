import React from 'react';
import './Services.css';

const services = [
  {
    icon: '📝',
    title: 'Typing & CV Writing',
    desc: 'Professional CVs, cover letters, reports, assignments & more.',
  },
  {
    icon: '📱',
    title: 'Phone Setup & App Installation',
    desc: 'We install apps, set up accounts, and transfer your data.',
  },
  {
    icon: '🔧',
    title: 'Basic Tech Help',
    desc: 'Fix slow phones, clean storage, update software & more.',
  },
  {
    icon: '📶',
    title: 'Internet & Wi-Fi Support',
    desc: 'Help connect Wi-Fi, fix internet issues & guide on bundles.',
  },
  {
    icon: '🔐',
    title: 'Account Setup & Recovery',
    desc: 'Gmail, Social Media, Password reset & more.',
  },
  {
    icon: '📄',
    title: 'Document & File Services',
    desc: 'Scan, convert (PDF ↔ Word), format & send files.',
  },
];

function Services({ onServiceClick }) {
  const handleKey = (e, title) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onServiceClick(title);
    }
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <span className="section-tag">What we do</span>
        <h2>Our Services</h2>
        <p className="services-subtitle">
          Everything you need, all in one place. Tap a service to request it.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              className="service-card"
              key={i}
              onClick={() => onServiceClick(s.title)}
              onKeyDown={(e) => handleKey(e, s.title)}
              role="button"
              tabIndex={0}
            >
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-cta">Request this →</span>
            </div>
          ))}
        </div>

        <div
          className="irembo-card"
          onClick={() => onServiceClick('Irembo Services')}
          onKeyDown={(e) => handleKey(e, 'Irembo Services')}
          role="button"
          tabIndex={0}
        >
          <span className="irembo-badge">NEW</span>
          <div className="irembo-icon">🏛️</div>
          <div className="irembo-text">
            <h3>Irembo Services</h3>
            <p>
              NID, Birth Certificate, Driving License, Police Clearance, Good
              Conduct, TAX, RRA, EBM, RSB & more.
            </p>
          </div>
          <span className="irembo-cta">Request this →</span>
        </div>
      </div>
    </section>
  );
}

export default Services;


