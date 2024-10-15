import PropTypes from "prop-types";
import { Stack, Box, Grid2 as Grid } from "@mui/material";
import SkillCard from "./SkillCard";
import "./Skills.css";

const Skills = (props) => {
  const { skillsDesc, skills } = props;

  return (
    <Stack className="skills-container" id="skills">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-desc">{skillsDesc}</p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={6}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.key}
              skillName={skill.heading}
              skillDesc={skill.description}
              skillIcon={skill.icon}
            />
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

Skills.propTypes = {
  skillsDesc: PropTypes.string.isRequired,
  skills: PropTypes.array,
};

export default Skills;
