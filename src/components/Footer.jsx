import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>🍔 FoodWeb</h2>
          <p>Delicious food delivered to your doorstep.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Menu</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: foodweb@gmail.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 FoodWeb | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;