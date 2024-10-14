import { Divider } from "@mui/material";
import Introduction from "../Introduction/Introduction";
import Skills from "../Skills/Skills";
import "./Body.css";
import Experience from "../Experience/Experience";

const Body = () => {
  return (
    <div className="body-container">
      <Introduction />
      <Divider className="divider" />
      <Skills />
      <Divider className="divider" />
      <Experience />
    </div>
  );
};

export default Body;
