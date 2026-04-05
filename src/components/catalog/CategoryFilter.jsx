import { categories } from '../../data/products';
import './CategoryFilter.css';

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter" id="category-filter">
      <div className="category-filter__tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-filter__tab ${activeCategory === cat.id ? 'category-filter__tab--active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
            id={`filter-${cat.id}`}
          >
            <span className="category-filter__icon">{cat.icon}</span>
            <span className="category-filter__label">{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
