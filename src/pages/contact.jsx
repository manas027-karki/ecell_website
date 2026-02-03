import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

// Initialize EmailJS
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // Replace with your public key

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'official@ecellmsit.com', // Replace with your official email
        }
      );

      if (response.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/ecellmsit',
      color: '#1877F2',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/ecellmsit',
      color: '#E4405F',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/company/ecellmsit',
      color: '#0A66C2',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/ecellmsit',
      color: '#1DA1F2',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/ecellmsit',
      color: '#000000',
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Header Section */}
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a question or idea? We'd love to hear from you. Drop us a message!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              {submitted && (
                <div className="success-message">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {error && <div className="error-message">{error}</div>}

              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us your thoughts..."
                  rows="6"
                  className="form-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="submit-button"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="social-section">
            <div className="social-card">
              <div className="social-header">
                <FaEnvelope className="social-envelope-icon" />
                <h2>Connect With Us</h2>
              </div>

              <p className="social-description">
                Follow us on social media to stay updated with the latest from ECELL MSIT
              </p>

              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={social.name}
                    >
                      <IconComponent className="social-icon" />
                      <span className="social-label">{social.name}</span>
                    </a>
                  );
                })}
              </div>

              <div className="contact-info">
                <div className="info-item">
                  <h3>Email</h3>
                  <a href="mailto:official@ecellmsit.com">official@ecellmsit.com</a>
                </div>
                <div className="info-item">
                  <h3>Organization</h3>
                  <p>ECELL MSIT - Entrepreneurship Cell</p>
                  <p>Maharaja Surajmal Institute of Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
