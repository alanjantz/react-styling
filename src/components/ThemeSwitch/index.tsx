import React from "react";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { useThemeChanger } from "../../hooks/ThemeChanger/ThemeChangerContext";

const ThemeSwitch: React.FC = () => {
  const { theme, toggleColorMode } = useThemeChanger();

  return (
    <>
      <Typography variant="overline">Light</Typography>
      <Switch
        checked={theme.palette.mode === "dark"}
        onClick={(_) => toggleColorMode()}
        color="default"
      />
      <Typography variant="overline">Dark</Typography>
    </>
  );
};

export default ThemeSwitch;
