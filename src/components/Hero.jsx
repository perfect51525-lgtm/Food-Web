import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">

      {/* Background Video */}
      <video
        className="landing-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="landing-overlay">

        <h1>Delicious Food Delivered Fast 🍕</h1>

        <p>
          Order your favorite meals anytime and enjoy
          fresh food at your doorstep.
        </p>

        <button onClick={() => navigate("/home")}>
          Explore Now
        </button>

      </div>

    </div>
  );
};

export default Hero;