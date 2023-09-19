import React from "react";
import img from "../assets/img.jpg";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about__container" id="about">
      <div className="about__image">
        <img src={img} alt="image" className="img" />
      </div>
      <div className="about__content">
        <h2>About Me</h2>
        <span>
          Hi, I'm John Doe, I'm a junior fullstack developer based in Berlin,
          <br />
          Germany with over 5+ years of experience, throughout my path i have
          <br />
          learned a lot of cutting hedge technologies such as: HTML5 , CSS3,
          <br />
          JavaScript, ReactJS, NextJS, Tailwind CSS, ExpressJS and MongoDB.
        </span>
        <div className="about__content__links">
          <RiTwitterXFill />
          <AiFillInstagram />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
};

export default About;
