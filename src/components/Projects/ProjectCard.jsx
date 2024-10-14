import { Grid2 as Grid, IconButton, Stack, Tooltip } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = () => {
  return (
    <Grid size={6} className="project-card">
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <h2 className="project-name">Analytics Toolkit</h2>
        <Stack direction="row" spacing={2}>
          <Tooltip title="Github">
            <IconButton aria-label="github-btn">
              <GitHubIcon style={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Host Link">
            <IconButton aria-label="link-btn">
              <LinkIcon style={{ color: "white" }} />
            </IconButton>
          </Tooltip>
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
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s.
      </p>
      <p>
        <span style={{ color: "#9cc9e3" }}>Tech Stack:</span> React, TypeScript,
        JavaScript, C#, .NET, Firebase
      </p>
    </Grid>
  );
};

export default ProjectCard;
