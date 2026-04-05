import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import './PageHeader.css';

export default function Contact() {
  return (
    <main className="page-transition-enter-active" id="contact-page">
      <section className="page-header">
        <div className="page-header__bg">
          <img src={import.meta.env.BASE_URL + "images/bakery-interior.png"} alt="Contact us" />
          <div className="page-header__overlay"></div>
        </div>
        <div className="container page-header__content">
          <span className="page-header__label">Say Hello!</span>
          <h1 className="page-header__title">Contact Us</h1>
          <p className="page-header__text">
            We'd love to hear from you. Reach out anytime!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
