import { useState } from 'react';
import { products } from '../../data/products';
import { getFormOrderWhatsAppUrl } from '../../utils/whatsapp';
import './OrderForm.css';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    quantity: 1,
    date: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = getFormOrderWhatsAppUrl(formData);
    window.open(url, '_blank');
  };

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="order-form__wrapper" id="order-form">
      <div className="order-form__header">
        <h2 className="section-title">Place Your Order</h2>
        <p className="order-form__subtitle">
          Fill in the form below and we'll confirm your order via WhatsApp.
        </p>
      </div>

      <form className="order-form" onSubmit={handleSubmit}>
        <div className="order-form__row">
          <div className="order-form__group">
            <label className="order-form__label" htmlFor="order-name">
              Full Name <span className="order-form__required">*</span>
            </label>
            <input
              type="text"
              id="order-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="order-form__input"
              required
            />
          </div>
          <div className="order-form__group">
            <label className="order-form__label" htmlFor="order-phone">
              Phone / WhatsApp <span className="order-form__required">*</span>
            </label>
            <input
              type="tel"
              id="order-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+62 812-xxxx-xxxx"
              className="order-form__input"
              required
            />
          </div>
        </div>

        <div className="order-form__row">
          <div className="order-form__group">
            <label className="order-form__label" htmlFor="order-product">
              Product <span className="order-form__required">*</span>
            </label>
            <select
              id="order-product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="order-form__input order-form__select"
              required
            >
              <option value="">Select a product</option>
              {products.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name} — {p.price}
                </option>
              ))}
              <option value="Custom Order">Custom Order (describe in notes)</option>
            </select>
          </div>
          <div className="order-form__group">
            <label className="order-form__label" htmlFor="order-quantity">
              Quantity <span className="order-form__required">*</span>
            </label>
            <input
              type="number"
              id="order-quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              max="100"
              className="order-form__input"
              required
            />
          </div>
        </div>

        <div className="order-form__group">
          <label className="order-form__label" htmlFor="order-date">
            Preferred Date <span className="order-form__required">*</span>
          </label>
          <input
            type="date"
            id="order-date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={minDate}
            className="order-form__input"
            required
          />
        </div>

        <div className="order-form__group">
          <label className="order-form__label" htmlFor="order-notes">
            Special Notes
          </label>
          <textarea
            id="order-notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any special requests? (e.g., design, flavor, allergies, delivery instructions)"
            className="order-form__input order-form__textarea"
            rows="4"
          />
        </div>

        <button type="submit" className="btn btn--whatsapp btn--lg order-form__submit" id="order-submit-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Send Order via WhatsApp
        </button>
      </form>

      <div className="order-form__policies">
        <h3 className="order-form__policies-title">📋 Order Policies</h3>
        <ul className="order-form__policies-list">
          <li>⏰ Custom cakes require minimum 3-5 days advance notice</li>
          <li>💳 50% deposit required for custom orders</li>
          <li>🚗 Free delivery within 5km, additional fee for further distance</li>
          <li>❌ Cancellations must be made 48 hours before delivery date</li>
          <li>✅ Payment via Bank Transfer (BCA, Mandiri) or e-wallet</li>
        </ul>
      </div>
    </div>
  );
}
