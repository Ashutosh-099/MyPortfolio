import { Divider } from "@mui/material";
import Introduction from "../Introduction/Introduction";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import "./Body.css";

const Body = () => {
  return (
    <div className="body-container">
      <Introduction />
      <Divider className="divider" />
      <Skills />
      <Divider className="divider" />
      <Experience />
      <Divider className="divider" />
      <Projects />
    </div>
  );
};

export default Body;
