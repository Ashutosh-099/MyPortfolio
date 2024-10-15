import PropTypes from "prop-types";
import { Stack, Grid2 as Grid } from "@mui/material";

const SkillCard = (props) => {
  const { skillName, skillDesc, skillIcon } = props;
  return (
    <Grid size={4}>
      <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
        <div dangerouslySetInnerHTML={{ __html: skillIcon }} />
        <div>
          <h4 className="skill-heading">{skillName}</h4>
          <p className="skill-details">{skillDesc}</p>
        </div>
      </Stack>
    </Grid>
  );
};

SkillCard.propTypes = {
  skillName: PropTypes.string.isRequired,
  skillDesc: PropTypes.string.isRequired,
  skillIcon: PropTypes.string.isRequired,
};
export default SkillCard;
