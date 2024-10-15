import PropTypes from "prop-types";
import { Stack, Tooltip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const ExperienceCard = (props) => {
  const { role, companyName, fromDate, toDate, roleDesc, achievements } = props;
  return (
    <div>
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
        <CircleIcon sx={{ fontSize: 16 }} />
        <span className="exp-list-item-heading">{role}</span>
        <span style={{ color: "#ffffffbf", fontSize: "22px" }}>
          {"at " + companyName}
        </span>
      </Stack>
      <div style={{ padding: "4px 0px 4px 32px" }}>
        <p style={{ margin: 0 }}>{fromDate + " - " + toDate}</p>
        <p>{roleDesc}</p>
        {achievements && (
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <Tooltip title="Achievements">
              <EmojiEventsIcon sx={{ color: "#d0bb57", fontSize: 26 }} />
            </Tooltip>
            <p>{achievements.join(", ")}</p>
          </Stack>
        )}
      </div>
    </div>
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
