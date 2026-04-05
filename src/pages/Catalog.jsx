import { useState } from 'react';
import { products } from '../data/products';
import CategoryFilter from '../components/catalog/CategoryFilter';
import ProductCard from '../components/catalog/ProductCard';
import './PageHeader.css';
import './Catalog.css';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main className="page-transition-enter-active" id="catalog-page">
      <section className="page-header">
        <div className="page-header__bg">
          <img src="/images/hero-bg.png" alt="Our products" />
          <div className="page-header__overlay"></div>
        </div>
        <div className="container page-header__content">
          <span className="page-header__label">Our Menu</span>
          <h1 className="page-header__title">Product Catalog</h1>
          <p className="page-header__text">
            Browse our collection of freshly baked goods, handcrafted daily with love.
          </p>
        </div>
      </section>

      <section className="catalog section">
        <div className="container">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="catalog__count">
            Showing <strong>{filteredProducts.length}</strong> products
          </div>

          <div className="catalog__grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="catalog__empty text-center">
              <span className="catalog__empty-icon">🔍</span>
              <h3>No products found</h3>
              <p>Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
