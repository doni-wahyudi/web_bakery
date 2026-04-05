import './OurStory.css';

export default function OurStory() {
  return (
    <section className="our-story section" id="our-story">
      <div className="container">
        <div className="our-story__grid">
          <div className="our-story__image">
            <img src={import.meta.env.BASE_URL + "images/bakery-interior.png"} alt="Our bakery interior" />
            <div className="our-story__image-accent">
              <span className="our-story__years">5+</span>
              <span className="our-story__years-text">Years of Baking</span>
            </div>
          </div>

          <div className="our-story__content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">A Passion Born in the Kitchen</h2>
            <div className="section-divider" style={{ margin: 'var(--space-md) 0' }}></div>

            <p className="our-story__text">
              Sweet Delights Bakery started as a small home kitchen in 2020, born from a deep passion for baking 
              and a dream to share homemade goodness with the community.
            </p>
            <p className="our-story__text">
              What began as weekend baking for friends and family quickly grew into a beloved local bakery. 
              Our founder believed that every celebration deserves a cake made with love, and every morning 
              deserves the aroma of freshly baked bread.
            </p>
            <p className="our-story__text">
              Today, we continue that tradition — waking up at 4 AM every day to bake everything from scratch, 
              using only the finest ingredients. From artisan sourdough to exquisite wedding cakes, each creation 
              tells a story of dedication and craftsmanship.
            </p>

            <div className="our-story__values">
              <div className="our-story__value">
                <span className="our-story__value-icon">💛</span>
                <div>
                  <h4>Made with Love</h4>
                  <p>Every recipe is crafted with genuine care and passion</p>
                </div>
              </div>
              <div className="our-story__value">
                <span className="our-story__value-icon">🌿</span>
                <div>
                  <h4>Quality First</h4>
                  <p>Premium ingredients, no shortcuts, no compromises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
