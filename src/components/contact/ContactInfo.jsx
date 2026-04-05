import { getWhatsAppUrl } from '../../utils/whatsapp';
import './ContactInfo.css';

const contactData = [
  {
    icon: "📍",
    title: "Visit Us",
    details: ["Jl. Raya Bakery No. 123", "Jakarta, Indonesia 12345"],
    action: { label: "Get Directions", href: "https://maps.google.com" },
  },
  {
    icon: "📞",
    title: "Call Us",
    details: ["+62 812-3456-7890", "Mon - Sat: 7AM - 9PM"],
    action: { label: "Call Now", href: "tel:+6281234567890" },
  },
  {
    icon: "💬",
    title: "WhatsApp",
    details: ["+62 812-3456-7890", "Quick response guaranteed"],
    action: { label: "Chat Now", href: getWhatsAppUrl("Hi! I'd like to inquire about your products.") },
  },
  {
    icon: "📧",
    title: "Email Us",
    details: ["hello@sweetdelights.com", "We reply within 24 hours"],
    action: { label: "Send Email", href: "mailto:hello@sweetdelights.com" },
  },
];

const hours = [
  { day: "Monday - Friday", time: "7:00 AM - 9:00 PM" },
  { day: "Saturday", time: "7:00 AM - 9:00 PM" },
  { day: "Sunday", time: "8:00 AM - 6:00 PM" },
  { day: "Public Holidays", time: "8:00 AM - 3:00 PM" },
];

export default function ContactInfo() {
  return (
    <div className="contact-info" id="contact-info">
      <div className="contact-info__cards">
        {contactData.map((item, index) => (
          <a
            key={index}
            href={item.action.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info__card card"
          >
            <span className="contact-info__icon">{item.icon}</span>
            <h3 className="contact-info__title">{item.title}</h3>
            {item.details.map((detail, i) => (
              <p key={i} className="contact-info__detail">{detail}</p>
            ))}
            <span className="contact-info__action">{item.action.label} →</span>
          </a>
        ))}
      </div>

      <div className="contact-info__hours">
        <h3 className="contact-info__hours-title">🕐 Operating Hours</h3>
        <div className="contact-info__hours-table">
          {hours.map((item, index) => (
            <div key={index} className="contact-info__hours-row">
              <span className="contact-info__hours-day">{item.day}</span>
              <span className="contact-info__hours-time">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-info__map">
        <h3 className="contact-info__map-title">📍 Find Us</h3>
        <div className="contact-info__map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295085552!2d106.6894311!3d-6.2293866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
