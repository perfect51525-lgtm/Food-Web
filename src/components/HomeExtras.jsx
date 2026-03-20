import React, { useState, useEffect } from 'react';
import './HomeExtras.css';

const HomeExtras = () => {
  // Testimonials Logic
  const testimonials = [
    {
      name: "Sarah Jenkins",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
      review: "Absolutely the best food delivery app! My pizza arrived piping hot in exactly 20 minutes.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Mike Thompson",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      review: "I love the live tracking feature. The food is always intensely fresh and the interface is incredibly smooth.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Emily Chen",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      review: "The variety of incredible restaurants is amazing. I can always satisfy my cravings instantly.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-extras-container">
      
      {/* 1. Live Tracking Aesthetic */}
      <section className="live-tracking-section">
        <div className="tracking-content">
          <div className="tracking-text">
            <h2>Track your order, <span className="highlight">in real-time</span></h2>
            <p>Know exactly where your food is at all times. From the restaurant's kitchen straight to your doorstep, our live dynamic map keeps you updated every millisecond of the way.</p>
            <ul className="tracking-features">
              <li>📍 Accurate GPS Tracking</li>
              <li>⏱️ Minute-by-Minute Updates</li>
              <li>🛵 Direct Communication with Rider</li>
            </ul>
          </div>
          <div className="tracking-visual">
            <div className="mock-map">
              <div className="map-route"></div>
              <div className="map-pin restaurant-pin">🍔</div>
              <div className="map-pin rider-pin">🛵</div>
              <div className="map-pin home-pin">🏠</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Customer Reviews Carousel */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-carousel">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
            >
              <div className="stars">{t.rating}</div>
              <p className="review-text">"{t.review}"</p>
              <div className="reviewer-info">
                <img src={t.image} alt={t.name} className="reviewer-img" />
                <h4 className="reviewer-name">- {t.name}</h4>
              </div>
            </div>
          ))}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={index === currentTestimonial ? 'dot active' : 'dot'}
                onClick={() => setCurrentTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Premium Newsletter Bar */}
      <section className="newsletter-section">
        <div className="newsletter-box">
          <h2>Get 20% Off Your First Order!</h2>
          <p>Join our newsletter and never miss out on exclusive discounts, new premium restaurants, and delicious deals.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default HomeExtras;
