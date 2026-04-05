import { Link } from 'react-router-dom';
import { featuredProducts } from '../../data/products';
import { getOrderWhatsAppUrl } from '../../utils/whatsapp';
import './FeaturedProducts.css';

export default function FeaturedProducts() {
  return (
    <section className="featured section" id="featured-products">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Our Specialties</span>
          <h2 className="section-title">Featured Treats</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Discover our most-loved creations, baked fresh every day with the finest ingredients.
          </p>
        </div>

        <div className="featured__grid">
          {featuredProducts.map((product, index) => (
            <div className="featured__card card" key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="featured__card-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.badge && (
                  <span className="featured__card-badge">{product.badge}</span>
                )}
                <div className="featured__card-overlay">
                  <a
                    href={getOrderWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--whatsapp btn--sm"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
              <div className="featured__card-content">
                <span className="featured__card-category">{product.category}</span>
                <h3 className="featured__card-title">{product.name}</h3>
                <p className="featured__card-desc">{product.description}</p>
                <div className="featured__card-footer">
                  <span className="featured__card-price">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="featured__cta text-center">
          <Link to="/catalog" className="btn btn--primary btn--lg" id="featured-view-all-btn">
            View Full Menu
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
