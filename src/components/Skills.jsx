import React, { useState } from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { frontend, backend, Tools } from "../skills";
import "../styles/Skills.css";

const Skills = () => {
  const [frontEnd, setFrontEnd] = useState(true);
  const [backEnd, setBackEnd] = useState(false);
  const [tools, setTools] = useState(false);

  return (
    <div className="skills__container" id="skills">
      <div className="skills__content">
        <h2>My Tech Skills</h2>
        <span>What I have learned during my web development path</span>
      </div>
      <div className="skills__section">
        <div className="skills__buttons">
          <button
            onClick={() => {
              setBackEnd(false);
              setTools(false);
              setFrontEnd(true);
            }}
            className="skills__button"
          >
            {frontEnd ? (
              <span style={{ color: "#3773f5" }}>
                <FaGlobeAfrica />
              </span>
            ) : (
              <span>
                <FaGlobeAfrica />
              </span>
            )}
            {frontEnd ? (
              <p style={{ color: "#3773f5" }}>Frontend</p>
            ) : (
              <p>Frontend</p>
            )}
          </button>
          <button
            onClick={() => {
              setBackEnd(true);
              setTools(false);
              setFrontEnd(false);
            }}
            className="skills__button"
          >
            {backEnd ? (
              <span style={{ color: "#3773f5" }}>
                <FaServer />
              </span>
            ) : (
              <span>
                <FaServer />
              </span>
            )}
            {backEnd ? (
              <p style={{ color: "#3773f5" }}>Backend</p>
            ) : (
              <p>Backend</p>
            )}
          </button>
          <button
            onClick={() => {
              setBackEnd(false);
              setTools(true);
              setFrontEnd(false);
            }}
            className="skills__button"
          >
            {tools ? (
              <span style={{ color: "#3773f5" }}>
                <FaTools />
              </span>
            ) : (
              <span>
                <FaTools />
              </span>
            )}
            {tools ? <p style={{ color: "#3773f5" }}>Tools</p> : <p>Tools</p>}
          </button>
        </div>
        <div className="skills__knowledge__container">
          {frontEnd ? (
            <div className="skills__knowledge">
              {frontend.map((language) => (
                <div className="skill">
                  {language.icon}
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
          ) : null}

          {backEnd ? (
            <div className="skills__knowledge">
              {backend.map((language) => (
                <div className="skill">
                  {language.icon}
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
          ) : null}

          {tools ? (
            <div className="skills__knowledge">
              {Tools.map((language) => (
                <div className="skill">
                  {language.icon}
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Skills;
