import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import BackToTop from './components/layout/BackToTop';
import Preloader from './components/layout/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Order from './pages/Order';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Preloader />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
