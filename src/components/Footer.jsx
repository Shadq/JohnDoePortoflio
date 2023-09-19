import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__text__container">
        <h2>Contact me</h2>
        <span>
          If you have made it this far and want to work with me write me an
          email at
          <br />
          johndoe@notrealdomain.com or message me on my socials.
        </span>
        <span>© John Doe 2023, All rights reserved</span>
        <div className="social__links">
          <RiTwitterXFill />
          <AiFillInstagram />
          <AiFillGithub />
        </div>
      </div>
      <form className="footer__email__container">
        <div>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <textarea placeholder="Messagge" />
        </div>
        <button>Send</button>
      </form>
    </footer>
  );
};

export default Footer;
