import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import GalleryPreview from '../components/home/GalleryPreview';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <main className="page-transition-enter-active" id="home-page">
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <GalleryPreview />
      <CtaBanner />
    </main>
  );
}
