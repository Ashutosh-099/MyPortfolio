import PropTypes from "prop-types";
import { Divider } from "@mui/material";
import Introduction from "../Introduction/Introduction";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import "./Body.css";

const Body = (props) => {
  const { introductionText, resumePath, skillsDesc, skills, experiences, projects } = props;

  return (
    <div className="body-container">
      <Introduction introductionText={introductionText} resumePath={resumePath} />
      <Divider className="divider" />
      <Skills skillsDesc={skillsDesc} skills={skills} />
      <Divider className="divider" />
      <Experience experiences={experiences} />
      <Divider className="divider" />
      <Projects projects={projects} />
    </div>
  );
};

Body.propTypes = {
  introductionText: PropTypes.string.isRequired,
  resumePath: PropTypes.string.isRequired,
  skillsDesc: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  experiences: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
};
export default Body;
