import "./About.css";

const About = () => {
  return (
    <div className="about">

      {/* HERO SECTION */}
      <div className="about-hero">
        <h1>About FoodWeb</h1>
        <p>
          Delivering delicious food to your doorstep with speed and quality.
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="about-container">

        <div className="about-text">

          <h2>Who We Are</h2>

          <p>
            FoodWeb is a modern food ordering platform where customers can
            explore a wide variety of meals and order their favorite food
            instantly. Our mission is to provide delicious food with fast
            delivery and excellent customer service.
          </p>

          <p>
            We partner with top restaurants to ensure every meal is fresh,
            tasty, and satisfying.
          </p>

        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="food"
          />
        </div>

      </div>

      {/* FEATURES SECTION */}

      <div className="features">

        <h2>Why Choose Us</h2>

        <div className="feature-grid">

          <div className="feature-card">
            🚚
            <h3>Fast Delivery</h3>
            <p>Your food delivered quickly and safely.</p>
          </div>

          <div className="feature-card">
            🥗
            <h3>Fresh Ingredients</h3>
            <p>We use high quality and fresh ingredients.</p>
          </div>

          <div className="feature-card">
            💳
            <h3>Secure Payment</h3>
            <p>Multiple secure payment options available.</p>
          </div>

          <div className="feature-card">
            ⭐
            <h3>Best Quality</h3>
            <p>Delicious meals prepared by top chefs.</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default About;