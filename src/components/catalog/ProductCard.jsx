import { getOrderWhatsAppUrl } from '../../utils/whatsapp';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-card card" id={`product-${product.id}`}>
      <div className="product-card__image">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
        <div className="product-card__overlay">
          <a
            href={getOrderWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp btn--sm"
          >
            💬 Order via WhatsApp
          </a>
        </div>
      </div>
      <div className="product-card__content">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">{product.price}</span>
          <a
            href={getOrderWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
          >
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
