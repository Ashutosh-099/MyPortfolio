import { Stack, Grid2 as Grid } from "@mui/material";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Stack className="project-container" id="skills">
      <h2 className="project-title">Projects</h2>
      <Grid container spacing={2} style={{ padding: "1rem" }}>
        <ProjectCard />
      </Grid>
    </Stack>
  );
};

export default Projects;
