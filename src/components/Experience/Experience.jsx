import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";

const Experience = (props) => {
  const { experiences } = props;

  return (
    <Stack className="exp-container" id="experiences">
      <h2 className="exp-title">Experiences</h2>
      <Stack spacing={2} className="exp-list-container">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            role={experience.role}
            companyName={experience.companyName}
            fromDate={experience.fromDate}
            toDate={experience.toDate}
            roleDesc={experience.roleDesc}
            achievements={experience.achievements ?? undefined}
          />
        ))}
      </Stack>
    </Stack>
  );
};

Experience.propTypes = {
  experiences: PropTypes.array.isRequired,
};

export default Experience;
