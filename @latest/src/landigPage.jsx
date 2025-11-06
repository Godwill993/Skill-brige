import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section className="landing">
      <div className="landing-content">
        <h1 className="landing-title">Connecting Students, Schools & Companies</h1>
        <p className="landing-subtitle">
          Bridging the gap between education and employment through innovation,
          collaboration, and opportunity.
        </p>
        <button className="landing-btn">Get Started</button>
      </div>

      <div className="landing-image">
        {/* 🖼️ Replace the image below with your own captivating picture */}
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80"
          alt="Students connecting with companies"
        />
      </div>
    </section>
  );
};

export default LandingPage;
