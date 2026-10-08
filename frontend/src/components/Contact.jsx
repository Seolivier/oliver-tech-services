import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact({ selectedService }) {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        message: `I'm interested in: ${selectedService}. `,
      }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Need Help? Get in Touch</h2>
          <p>Call, WhatsApp, email, or send us a message — we respond fast.</p>

          <div className="contact-detail">
            <span>📞</span>
            <a href="tel:+250781843337">+250 781 843 337</a>
          </div>
          <div className="contact-detail">
            <span>💬</span>
            <a href="https://wa.me/250781843337" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
          <div className="contact-detail">
            <span>✉️</span>
            <a href="mailto:mupenziolivier@gmail.com">mupenziolivier@gmail.com</a>
          </div>
          <div className="contact-detail">
            <span>📍</span>
            <p>Kigali, Rwanda</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="How can we help you?"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form-success">✅ Message sent! We'll contact you soon.</p>
          )}
          {status === 'error' && (
            <p className="form-error">❌ Something went wrong. Please try again or WhatsApp us.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;







