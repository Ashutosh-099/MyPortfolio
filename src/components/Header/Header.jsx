import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { GitHub, LinkedIn } from "@mui/icons-material";
import "./Header.css";
import { Tooltip } from "@mui/material";

const Header = () => {
  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-between", alignItems: "center" }}
      padding={"2rem 0.5rem 0.5rem"}
    >
      <div className="header-first-container">
        <span className="header-name">Ashutosh Agarwal</span>
      </div>
      <Stack direction="row" spacing={7} className="header-second-container">
      <Link underline="none" color="rgba(255, 255, 255, 0.75)" href="#skills">
          <Tooltip title="Skills">
            <span>Skills</span>
          </Tooltip>
        </Link>
        <Link underline="none" color="rgba(255, 255, 255, 0.75)" href="#">
          <Tooltip title="Experience">
            <span>Experience</span>
          </Tooltip>
        </Link>
        <Link underline="none" color="rgba(255, 255, 255, 0.75)" href="#">
          <Tooltip title="Projects">
            <span>Projects</span>
          </Tooltip>
        </Link>
      </Stack>
      <Stack direction="row" spacing={3} className="header-third-container">
        <Link
          color="inherit"
          href="https://github.com/AshutoshAgarwal99"
          target="_blank"
        >
          <Tooltip title="Github">
            <GitHub sx={{ fontSize: 40 }} />
          </Tooltip>
        </Link>
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/ashutosh-agarwal-73b7a7134/"
          target="_blank"
        >
          <Tooltip title="LinkedIn">
            <LinkedIn sx={{ fontSize: 44 }} />
          </Tooltip>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Header;