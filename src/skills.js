import { FaGitAlt } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiYarn } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { DiNpm } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiMongoose } from "react-icons/si";

const frontend = [
  {
    name: "HTML",
    icon: (
      <p>
        <AiFillHtml5 />
      </p>
    ),
  },
  {
    name: "CSS",
    icon: (
      <p>
        <DiCss3Full />
      </p>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <p>
        <SiJavascript />
      </p>
    ),
  },
  {
    name: "ReactJS",
    icon: (
      <p>
        <FaReact />
      </p>
    ),
  },
  {
    name: "NextJS",
    icon: (
      <p>
        <TbBrandNextjs />
      </p>
    ),
  },
  {
    name: "TailwindCSS",
    icon: (
      <p>
        <SiTailwindcss />
      </p>
    ),
  },
];

const backend = [
  {
    name: "NodeJs",
    icon: (
      <p>
        <FaNodeJs />
      </p>
    ),
  },
  {
    name: "Express",
    icon: (
      <p>
        <SiExpress />
      </p>
    ),
  },
  {
    name: "Mongoose",
    icon: (
      <p>
        <SiMongoose />
      </p>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <p>
        <SiMongodb />
      </p>
    ),
  },
  {
    name: "JWT",
    icon: (
      <p>
        <SiJsonwebtokens />
      </p>
    ),
  },
];

const Tools = [
  {
    name: "Npm",
    icon: (
      <p>
        <DiNpm />
      </p>
    ),
  },
  {
    name: "Yarn",
    icon: (
      <p>
        <SiYarn />
      </p>
    ),
  },
  {
    name: "Git",
    icon: (
      <p>
        <FaGitAlt />
      </p>
    ),
  },
  {
    name: "Chrome Dev Tools",
    icon: (
      <p>
        <FaChrome />
      </p>
    ),
  },
  {
    name: "VSCode",
    icon: (
      <p>
        <SiVisualstudiocode />
      </p>
    ),
  },
];

export { frontend, backend, Tools };
