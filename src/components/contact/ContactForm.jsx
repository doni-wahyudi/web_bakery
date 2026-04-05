import { useState } from 'react';
import { getContactWhatsAppUrl } from '../../utils/whatsapp';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = getContactWhatsAppUrl(formData);
    window.open(url, '_blank');
  };

  return (
    <div className="contact-form__wrapper" id="contact-form">
      <div className="contact-form__header text-center">
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title">Send Us a Message</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Have a question or special request? We'd love to hear from you!
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="contact-name">
              Your Name <span className="contact-form__required">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="contact-form__input"
              required
            />
          </div>
          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="contact-email">
              Email <span className="contact-form__required">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="contact-form__input"
              required
            />
          </div>
        </div>

        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="contact-subject">
            Subject <span className="contact-form__required">*</span>
          </label>
          <input
            type="text"
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className="contact-form__input"
            required
          />
        </div>

        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="contact-message">
            Message <span className="contact-form__required">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your inquiry..."
            className="contact-form__input contact-form__textarea"
            rows="5"
            required
          />
        </div>

        <button type="submit" className="btn btn--primary btn--lg contact-form__submit" id="contact-submit-btn">
          Send Message via WhatsApp
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
    </div>
  );
}
