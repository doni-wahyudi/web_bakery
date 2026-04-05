import { useState, useEffect } from 'react';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Don't just take our word for it — hear from our happy customers!
          </p>
        </div>

        <div className="testimonials__carousel">
          <div className="testimonials__track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div className="testimonials__slide" key={testimonial.id}>
                <div className="testimonials__card glass-card">
                  <div className="testimonials__stars">{renderStars(testimonial.rating)}</div>
                  <p className="testimonials__text">"{testimonial.text}"</p>
                  <div className="testimonials__author">
                    <div className="testimonials__avatar">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="testimonials__name">{testimonial.name}</h4>
                      <span className="testimonials__role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${index === activeIndex ? 'testimonials__dot--active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
