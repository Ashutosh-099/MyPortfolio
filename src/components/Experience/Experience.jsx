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
            <span style={{ color: "#ffffffbf", fontSize: "22px" }}>
              at MAQ Software
            </span>
          </Stack>
          <div style={{ padding: "4px 0px 4px 32px" }}>
            <p style={{ margin: 0 }}>Sept, 2022 - Present</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <CircleIcon sx={{ fontSize: 16 }} />
            <span className="exp-list-item-heading">Software Engineer 2</span>
            <span style={{ color: "#ffffffbf", fontSize: "22px" }}>
              at MAQ Software
            </span>
          </Stack>
          <div style={{ padding: "4px 0px 4px 32px" }}>
            <p style={{ margin: 0 }}>Sept, 2022 - Present</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <CircleIcon sx={{ fontSize: 16 }} />
            <span className="exp-list-item-heading">Software Engineer 2</span>
            <span style={{ color: "#ffffffbf", fontSize: "22px" }}>
              at MAQ Software
            </span>
          </Stack>
          <div style={{ padding: "4px 0px 4px 32px" }}>
            <p style={{ margin: 0 }}>Sept, 2022 - Present</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </Stack>
    </Stack>
  );
};

export default Experience;
