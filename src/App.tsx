import React, { useCallback, useState } from "react";
import {
  createTheme,
  CssBaseline,
  Theme,
  ThemeProvider,
} from "@material-ui/core";
import Left from "./components/Left";
import Right from "./components/Right";
import ThemeChanger from "./pages/ThemeChanger";
import Tabs from "./components/Tabs";

export const defaultTheme = createTheme({
  palette: {
    type: "light",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
        },
        "*::-webkit-scrollbar": {
          width: "4px",
          height: "4px",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  },
});

const App: React.FC = () => {
  const [customTheme, setCustomTheme] = useState<Theme>(defaultTheme);

  const changeTheme = useCallback(
    (newTheme: Theme): void => {
      setCustomTheme((prevTheme) => ({ ...prevTheme, ...newTheme }));
    },
    [setCustomTheme]
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Left>
        <ThemeProvider theme={createTheme(customTheme)}>
          <CssBaseline />
          <Tabs />
        </ThemeProvider>
      </Left>
      <Right>
        <ThemeChanger onThemeChange={changeTheme} />
      </Right>
    </ThemeProvider>
  );
};

export default App;
