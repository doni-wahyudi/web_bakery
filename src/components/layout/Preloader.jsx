import { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`preloader ${!isLoading ? 'preloader--hidden' : ''}`} id="preloader">
      <div className="preloader__content">
        <div className="preloader__icon">🧁</div>
        <div className="preloader__text">
          <span className="preloader__name">Sweet Delights</span>
          <span className="preloader__tagline">Baking something special...</span>
        </div>
        <div className="preloader__bar">
          <div className="preloader__bar-fill"></div>
        </div>
      </div>
    </div>
  );
}
