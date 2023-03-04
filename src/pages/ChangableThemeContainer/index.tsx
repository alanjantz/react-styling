import React from "react";
import ThemeProvider from "../../components/ThemeProvider";
import { useThemeChanger } from "../../hooks/ThemeChanger/ThemeChangerContext";
import Styleguide from "../Styleguide";

const ChangableThemeContainer: React.FC = () => {
  const { theme } = useThemeChanger();

  return (
    <ThemeProvider theme={{ ...theme }}>
      <Styleguide />
    </ThemeProvider>
  );
};

export default ChangableThemeContainer;
