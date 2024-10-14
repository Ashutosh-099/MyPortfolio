import { Stack } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Stack
      direction={"row"}
      sx={{ justifyContent: "space-evenly", alignItems: "center" }}
      style={{ borderTop: "1px solid #ffffff1a", marginTop: 2, paddingTop: 6}}
    >
      <p>
        <b>
          No <CopyrightIcon />
          copyright issue
        </b>
      </p>
      <p>Made with ❣️ in India</p>
      <p style={{ fontFamily: "'Beth Ellen', cursive" }}>Ashutosh Agarwal</p>
    </Stack>
  );
};

export default Footer;
