import PropTypes from "prop-types";
import { Tooltip, Stack, Link } from "@mui/material";
import { componentMap } from "../../utils/common";
import "./Header.css";

const Header = ({ headerData }) => {
  const { name, categories, referenceLinks } = headerData;

  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-between", alignItems: "center" }}
      padding={"2rem 0.5rem 0.5rem"}
    >
      <div className="header-first-container">
        <span className="header-name">{name}</span>
      </div>
      <Stack direction="row" spacing={7} className="header-second-container">
        {categories?.map((category) => (
          <Link
            underline="none"
            color="rgba(255, 255, 255, 0.75)"
            href={`#${category.toLowerCase()}`}
            key={category}
          >
            <Tooltip title={category}>
              <span>{category}</span>
            </Tooltip>
          </Link>
        ))}
      </Stack>
      <Stack direction="row" spacing={3} className="header-third-container">
        {referenceLinks?.map((reference) => (
          <Link
            color="inherit"
            href={reference.href}
            target="_blank"
            key={reference.id}
          >
            <Tooltip title={reference.name}>
              {componentMap[reference.elementName]}
            </Tooltip>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

Header.propTypes = {
  headerData: PropTypes.object,
};

export default Header;
