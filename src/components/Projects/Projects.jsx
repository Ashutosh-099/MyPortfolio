import PropTypes from "prop-types";
import { Stack, Grid2 as Grid } from "@mui/material";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = (props) => {
  const { projects } = props;

  return (
    <Stack className="project-container" id="skills">
      <h2 className="project-title">Projects</h2>
      <Grid container spacing={2} style={{ padding: "1rem" }}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            projectName={project.projectName}
            projectDesc={project.projectDesc}
            techStack={project.techStack}
            githubLink={project.gitHubLink}
            hostLink={project.hostLink}
          />
        ))}
      </Grid>
    </Stack>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
