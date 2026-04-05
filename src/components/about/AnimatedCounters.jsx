import { useState, useEffect, useRef } from 'react';
import './AnimatedCounters.css';

const stats = [
  { icon: "🎂", value: 5000, suffix: "+", label: "Cakes Baked" },
  { icon: "😊", value: 3000, suffix: "+", label: "Happy Customers" },
  { icon: "📅", value: 5, suffix: "+", label: "Years of Experience" },
  { icon: "🍰", value: 50, suffix: "+", label: "Unique Flavors" },
];

function useCountUp(end, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, shouldStart]);

  return count;
}

function CounterItem({ stat, isVisible }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div className="counters__item">
      <span className="counters__icon">{stat.icon}</span>
      <span className="counters__value">
        {count.toLocaleString()}{stat.suffix}
      </span>
      <span className="counters__label">{stat.label}</span>
    </div>
  );
}

export default function AnimatedCounters() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="counters" id="animated-counters" ref={ref}>
      <div className="counters__bg">
        <img src={import.meta.env.BASE_URL + "images/bakery-hero.png"} alt="Bakery background" />
        <div className="counters__overlay"></div>
      </div>
      <div className="container counters__content">
        <div className="counters__grid">
          {stats.map((stat, index) => (
            <CounterItem key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
