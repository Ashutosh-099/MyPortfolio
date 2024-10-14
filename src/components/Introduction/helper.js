import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const ResumeButton = styled(Button)({
  boxShadow: "none",
  width: "292px",
  textTransform: "none",
  fontSize: 24,
  fontWeight: 600,
  padding: "0.6rem 1rem",
  border: "1px solid",
  borderRadius: "28px",
  backgroundColor: "#945dd6",
  borderColor: "#945dd6",
  color: "white",
  marginBottom: "1rem",
  "&:hover": {
    backgroundColor: "#a17ad0",
    borderColor: "#a17ad0",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#a17ad0",
    borderColor: "#a17ad0",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
