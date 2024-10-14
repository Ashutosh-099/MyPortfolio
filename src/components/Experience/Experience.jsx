import { Stack } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import "./Experience.css";

const Experience = () => {
  return (
    <Stack className="exp-container" id="experience">
      <h2 className="exp-title">Experiences</h2>
      <Stack spacing={2} className="exp-list-container">
        <div>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <CircleIcon sx={{ fontSize: 16 }} />
            <span className="exp-list-item-heading">Software Engineer 2</span>
            <span style={{ color: "#ffffffbf", fontSize: "22px"}}>at MAQ Software</span>
          </Stack>
        </div>
      </Stack>
    </Stack>
  );
};

export default Experience;
