import { Link } from 'react-router-dom';
import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <section className="cta-banner" id="cta-banner">
      <div className="cta-banner__bg">
        <img src={import.meta.env.BASE_URL + "images/bakery-interior.png"} alt="Our bakery" />
        <div className="cta-banner__overlay"></div>
      </div>
      <div className="container cta-banner__content">
        <span className="cta-banner__label">Ready to Order?</span>
        <h2 className="cta-banner__title">
          Let Us Make Your<br />Celebration Sweeter
        </h2>
        <p className="cta-banner__text">
          Whether it's a birthday, wedding, or just a treat for yourself — 
          we'll bake something special just for you.
        </p>
        <div className="cta-banner__actions">
          <Link to="/order" className="btn btn--accent btn--lg" id="cta-order-btn">
            🎂 Order Your Cake
          </Link>
          <Link to="/contact" className="btn btn--secondary btn--lg cta-banner__contact-btn" id="cta-contact-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
