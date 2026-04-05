import './OurValues.css';

const values = [
  {
    icon: "🌾",
    title: "Premium Ingredients",
    description: "We use only the finest flour, real European butter, premium Belgian chocolate, and fresh seasonal fruits.",
  },
  {
    icon: "🤲",
    title: "Handmade Process",
    description: "Every item is handcrafted with traditional techniques — no mass production, no artificial preservatives.",
  },
  {
    icon: "💝",
    title: "Baked with Heart",
    description: "We believe food tastes better when it's made with genuine love and care for our customers.",
  },
  {
    icon: "🏆",
    title: "Consistency & Quality",
    description: "From the first bite to the last, we ensure consistent quality in every single product we create.",
  },
  {
    icon: "🌍",
    title: "Community First",
    description: "We support local suppliers and are committed to being a positive part of our community.",
  },
  {
    icon: "♻️",
    title: "Sustainable Practices",
    description: "We minimize waste, use eco-friendly packaging, and are committed to sustainable baking practices.",
  },
];

export default function OurValues() {
  return (
    <section className="our-values section section--alt" id="our-values">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Our Values</span>
          <h2 className="section-title">What We Believe In</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            These core values guide everything we do, from ingredient selection to customer service.
          </p>
        </div>

        <div className="our-values__grid">
          {values.map((value, index) => (
            <div className="our-values__card" key={index}>
              <div className="our-values__icon">{value.icon}</div>
              <h3 className="our-values__title">{value.title}</h3>
              <p className="our-values__desc">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
