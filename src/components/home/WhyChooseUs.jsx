import './WhyChooseUs.css';

const features = [
  {
    icon: "🌅",
    title: "Fresh Every Morning",
    description: "We bake everything from scratch daily at 4 AM, so you get the freshest treats straight from our oven.",
  },
  {
    icon: "👨‍🍳",
    title: "Handcrafted with Love",
    description: "Every product is carefully handcrafted by our skilled bakers with attention to detail and passion.",
  },
  {
    icon: "🌾",
    title: "Premium Ingredients",
    description: "We source the finest flour, real butter, Belgian chocolate, and fresh fruits for superior taste.",
  },
  {
    icon: "🎨",
    title: "Custom Designs",
    description: "From birthday themes to elegant wedding tiers — we bring your dream cake vision to life.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-us section section--alt" id="why-choose-us">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Why Us?</span>
          <h2 className="section-title">What Makes Us Special</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            We pour our heart into every recipe, ensuring each bite is a moment of pure delight.
          </p>
        </div>

        <div className="why-us__grid">
          {features.map((feature, index) => (
            <div className="why-us__card" key={index}>
              <div className="why-us__icon">{feature.icon}</div>
              <h3 className="why-us__title">{feature.title}</h3>
              <p className="why-us__desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
