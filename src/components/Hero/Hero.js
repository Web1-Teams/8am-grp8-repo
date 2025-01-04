import React from "react";
import "./Hero.css";

const Hero=() =>{
  return (
    <section className="hero">
      <div className="text">
        <small>All Thing Needs for Parties</small>
        <h1>Planning Celebration & Design</h1>
        <p>
          Welcome to Golden Glow, where we turn every small party into an
          exceptional event filled with joy and beautiful moments.
        </p>
        <button>Shop Now</button>
      </div>
      <div className="hero-image">
        <img
          src="product-category12-copyright-630x630.jpg"
          alt="Yellow Jacket"
          className="default"
        />
        <img
          src="product-image1-copyright-630x630.jpg"
          alt="Red Jacket"
          className="hover-image"
        />
      </div>
    </section>
    
  );
}

export default Hero;