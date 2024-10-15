import PropTypes from "prop-types";
import { Grid2 as Grid, IconButton, Stack, Tooltip } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = (props) => {
  const { projectName, projectDesc, techStack, githubLink, hostLink } = props;

  return (
    <Grid size={6} className="project-card">
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <h2 className="project-name">{projectName}</h2>
        <Stack direction="row" spacing={2}>
          {githubLink && (
            <Tooltip title="Github">
              <IconButton aria-label="github-btn">
                <GitHubIcon style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          )}
          {hostLink && (
            <Tooltip title="Host Link">
              <IconButton aria-label="link-btn">
                <LinkIcon style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      </Stack>
      <hr
        style={{
          width: "50%",
          height: "3px",
          margin: "10px 0px",
          border: "0px",
          background: "#d0bb57",
        }}
      />
      <p>{projectDesc}</p>
      <p>
        <span style={{ color: "#9cc9e3" }}>Tech Stack:</span>{" "}
        {techStack.join(", ")}
      </p>
    </Grid>
  );
};

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  githubLink: PropTypes.string,
  hostLink: PropTypes.string,
};

export default ProjectCard;
