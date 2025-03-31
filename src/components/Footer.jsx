// src/components/Footer.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';

const Footer = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
      .then(() => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        form.current.reset();
      })
      .catch(() => {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Have information about a case? Want to share your theories? Get in touch with us.</p>
          
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <select name="subject" required>
                <option value="">Select Subject</option>
                <option value="case_info">Case Information</option>
                <option value="theory">Share a Theory</option>
                <option value="feedback">General Feedback</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={status.type === 'loading'}>
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#featured">Featured Cases</a></li>
            <li><a href="#map">Case Map</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="https://github.com/m3libere28/unsolved-mysteries-fanpage" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Unsolved Mysteries Fanpage. All rights reserved.</p>
        <p className="footer-note">This is a fan-made website dedicated to unsolved mysteries and cold cases.</p>
      </div>
    </footer>
  );
};

export default Footer;