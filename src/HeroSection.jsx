import React from "react";
import "./style.css"
const HeroSection = () => {
  return (
    <section className="hero">
      <nav className="navbar">
        <h2 className="logo">Homedine</h2>
        <ul className="nav-links">
          <li>Shop</li>
          <li>Bestsellers</li>
          <li>About</li>
        </ul>
      </nav>

   
      <div className="hero-content">
        <h1>
          Eco‑Friendly <br />
          Kitchenware for <br />
          a greener home
        </h1>
        <p>
          Sustainable and thoughtfully designed kitchen essentials that make
          everyday living better for you and the planet.
        </p>
        <button className="cta">Shop Now</button>
      </div>

    
    </section>
  );
};

export default HeroSection;
