import { GitHub, LinkedIn, Google } from "@mui/icons-material";

function github() {
    return <GitHub sx={{ fontSize: 40 }} />;
}

function linkedin() {
    return <LinkedIn sx={{ fontSize: 44 }} />;
}

function google() {
    return <Google sx={{ fontSize: 40 }} />;
}

export const componentMap = {
    Github: github(),
    LinkedIn: linkedin(),
    Google: google()
};