import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import "./style.css"
const HeroSection = () => {
  return (
    <section className="hero">
      <nav className="navbar">
        <RxHamburgerMenu />
        <h1 className="heading">Home<span className="dine">dine</span></h1>
       <IoCartOutline />
       </nav>
      <section className="hero-content">
        <div id="hero-heading">
        <h2 id="hero-text">Eco-friendly Kitchenware</h2>
        <p>The eco-friendly kitchenware which use a sense of urgency to make a beautiful , sustainable home.</p>

        <button className="hero-btn">Shop Now</button>
        </div>

      </section>


   
     

    
    </section>
  );
};

export default HeroSection;
