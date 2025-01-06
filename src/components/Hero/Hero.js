import React from "react";
import "./Hero.css";
import pepole from "../assest/images/janaImg/pepole.jpeg";
import logo22 from "../assest/images/janaImg/logo22.jpeg";

import logo222 from "../assest/images/janaImg/logo222.jpeg";

const Hero=() =>{
  return (
    <section className="hero">
      <div className="text">
        <small>All Thing Needs for Parties</small>
      
        <p>
        "Welcome to your one-stop destination for unforgettable celebrations! From birthdays to engagements and graduations, we bring your special moments to life with stunning decorations, delectable cakes, and unique products."
        </p>
       
      </div>
      <div className="hero-image">
        <img
           src={logo22}
        
          alt="partiy"
          className="default"
        />
        <img
       
          src={logo222}
           alt="imeg"
          className="hover-image"
        />
      </div>
    </section>
    
  );
}

export default Hero;