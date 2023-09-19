import React from "react";
import image from "../assets/image.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero__container" id="hero">
      <div className="hero__title">
        <h1>
          Professional Web <br /> Developer For Startups
        </h1>
        <span>
          Fullstack developer with over 5+ years of experience <br />
          based in Berlin 📍, Germany 🇩🇪
        </span>

        <button>Contact Me</button>
      </div>
      <div className="hero__image">
        <img src={image} className="image" />
      </div>
    </div>
  );
};

export default Hero;
