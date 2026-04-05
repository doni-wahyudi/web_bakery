import OurStory from '../components/about/OurStory';
import OurValues from '../components/about/OurValues';
import AnimatedCounters from '../components/about/AnimatedCounters';
import './PageHeader.css';

export default function About() {
  return (
    <main className="page-transition-enter-active" id="about-page">
      <section className="page-header">
        <div className="page-header__bg">
          <img src={import.meta.env.BASE_URL + "images/bakery-interior.png"} alt="Our bakery" />
          <div className="page-header__overlay"></div>
        </div>
        <div className="container page-header__content">
          <span className="page-header__label">Get to Know Us</span>
          <h1 className="page-header__title">About Our Bakery</h1>
          <p className="page-header__text">
            Discover the story, passion, and values behind every bake.
          </p>
        </div>
      </section>

      <OurStory />
      <AnimatedCounters />
      <OurValues />
    </main>
  );
}
