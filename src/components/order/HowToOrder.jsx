import './HowToOrder.css';

const steps = [
  {
    number: "01",
    icon: "📋",
    title: "Choose Your Product",
    description: "Browse our catalog and pick your favorite cake, pastry, or bread.",
  },
  {
    number: "02",
    icon: "📝",
    title: "Fill the Order Form",
    description: "Tell us your name, phone, product details, quantity, and delivery date.",
  },
  {
    number: "03",
    icon: "💬",
    title: "Confirm via WhatsApp",
    description: "Your order details will be sent to our WhatsApp for quick confirmation.",
  },
  {
    number: "04",
    icon: "🎉",
    title: "Enjoy Your Order!",
    description: "Pick up at our bakery or get it delivered — fresh and ready for you!",
  },
];

export default function HowToOrder() {
  return (
    <section className="how-to-order" id="how-to-order">
      <div className="text-center">
        <span className="section-label">Simple Process</span>
        <h2 className="section-title">How to Order</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Ordering is as easy as 1-2-3-4! Here's how it works.
        </p>
      </div>

      <div className="how-to-order__steps">
        {steps.map((step, index) => (
          <div className="how-to-order__step" key={index}>
            <div className="how-to-order__step-number">{step.number}</div>
            <div className="how-to-order__step-icon">{step.icon}</div>
            <h3 className="how-to-order__step-title">{step.title}</h3>
            <p className="how-to-order__step-desc">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="how-to-order__connector"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
