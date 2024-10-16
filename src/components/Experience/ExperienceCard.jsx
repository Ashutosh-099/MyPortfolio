import PropTypes from "prop-types";
import { Stack, Tooltip, Grid2 as Grid } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const ExperienceCard = (props) => {
  const { role, companyName, fromDate, toDate, roleDesc, achievements } = props;
  return (
    <Grid size={"grow"} className="experience-card">
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
        spacing={2}
      >
        <div>
          <span className="exp-list-item-heading">{role}</span>
          <span style={{ color: "#ffffffbf", fontSize: "22px", marginLeft: 8 }}>
            {"at " + companyName}
          </span>
        </div>
        <p style={{ margin: 0 }}>{fromDate + " - " + toDate}</p>
      </Stack>
      {(roleDesc || achievements) && (
        <div style={{ padding: "4px 0px 4px 0px" }}>
          {roleDesc && <p>{roleDesc}</p>}
          {achievements && (
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
              <Tooltip title="Achievements">
                <EmojiEventsIcon sx={{ color: "#d0bb57", fontSize: 26 }} />
              </Tooltip>
              <p>{achievements.join(", ")}</p>
            </Stack>
          )}
        </div>
      )}
    </Grid>
  );
};

ExperienceCard.propTypes = {
  role: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  roleDesc: PropTypes.string.isRequired,
  achievements: PropTypes.array,
};
export default ExperienceCard;
