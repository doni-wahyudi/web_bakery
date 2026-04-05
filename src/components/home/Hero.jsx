import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero-section">
      <div className="hero__bg">
        <img src="/images/hero-bg.png" alt="Bakery display" className="hero__bg-img" />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__label animate-fade-in-up">🧁 Welcome to</span>
          <h1 className="hero__title animate-fade-in-up stagger-1">
            Sweet Delights
            <span className="hero__title-accent">Bakery</span>
          </h1>
          <p className="hero__subtitle animate-fade-in-up stagger-2">
            Handcrafted cakes, artisan pastries, and freshly baked bread — 
            made with love and premium ingredients every single day.
          </p>
          <div className="hero__actions animate-fade-in-up stagger-3">
            <Link to="/catalog" className="btn btn--primary btn--lg" id="hero-catalog-btn">
              Explore Our Menu
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link to="/order" className="btn btn--secondary btn--lg" id="hero-order-btn">
              Order Now
            </Link>
          </div>
        </div>

        <div className="hero__badges animate-fade-in-up stagger-4">
          <div className="hero__badge">
            <span className="hero__badge-icon">🌿</span>
            <span className="hero__badge-text">Fresh Daily</span>
          </div>
          <div className="hero__badge">
            <span className="hero__badge-icon">👨‍🍳</span>
            <span className="hero__badge-text">Handcrafted</span>
          </div>
          <div className="hero__badge">
            <span className="hero__badge-icon">⭐</span>
            <span className="hero__badge-text">Premium Quality</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
