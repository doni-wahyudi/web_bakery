import './GalleryPreview.css';

const galleryImages = [
  { src: "/images/wedding-cake.png", alt: "Elegant wedding cake" },
  { src: "/images/cupcakes.png", alt: "Gourmet cupcakes" },
  { src: "/images/croissants.png", alt: "Butter croissants" },
  { src: "/images/pastries.png", alt: "French pastries" },
  { src: "/images/cookies.png", alt: "Assorted cookies" },
  { src: "/images/artisan-bread.png", alt: "Artisan sourdough" },
];

export default function GalleryPreview() {
  return (
    <section className="gallery section section--alt" id="gallery-preview">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">Our Delicious Creations</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A peek into our kitchen — every piece is a work of art.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((image, index) => (
            <div className="gallery__item" key={index}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__item-icon">📸</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
