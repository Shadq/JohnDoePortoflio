import React from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

const Header = () => {
  return (
    <nav>
      <h2>
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
          John Doe
        </Link>
      </h2>
      <ul>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <button>
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact Me
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
