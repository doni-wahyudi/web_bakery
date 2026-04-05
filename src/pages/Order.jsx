import HowToOrder from '../components/order/HowToOrder';
import OrderForm from '../components/order/OrderForm';
import './PageHeader.css';

export default function Order() {
  return (
    <main className="page-transition-enter-active" id="order-page">
      <section className="page-header">
        <div className="page-header__bg">
          <img src="/images/birthday-cake.png" alt="Order now" />
          <div className="page-header__overlay"></div>
        </div>
        <div className="container page-header__content">
          <span className="page-header__label">Let's Bake!</span>
          <h1 className="page-header__title">Place Your Order</h1>
          <p className="page-header__text">
            Fill in the form and we'll confirm your order via WhatsApp in minutes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <HowToOrder />
          <OrderForm />
        </div>
      </section>
    </main>
  );
}
