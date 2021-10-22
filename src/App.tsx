import React, { useCallback, useState } from "react";
import {
  createTheme,
  CssBaseline,
  Theme,
  ThemeProvider,
} from "@material-ui/core";
import Left from "./components/Left";
import Right from "./components/Right";
import Album from "./pages/Album";
import ThemeChanger from "./pages/ThemeChanger";

const theme = createTheme({
  palette: {
    type: "light",
  },
});
const App: React.FC = () => {
  const [customTheme, setCustomTheme] = useState<Theme>(theme);

  const changeTheme = useCallback((newTheme: Theme): void => {
    console.log("chamou", newTheme);
    setCustomTheme({ ...theme, ...newTheme });
  }, []);

  return (
    <>
      <Left>
        <ThemeProvider theme={createTheme(customTheme)}>
          <CssBaseline />
          <Album />
        </ThemeProvider>
      </Left>
      <Right>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeChanger onThemeChange={changeTheme} />
        </ThemeProvider>
      </Right>
    </>
  );
};

export default App;
