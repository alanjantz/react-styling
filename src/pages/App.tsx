import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import Styleguide from "./Styleguide/index";

export const defaultTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#456B8C",
    },
    secondary: {
      main: "#FF638B",
    },
    info: {
      main: "#6AB2FF",
    },
    success: {
      main: "#ADE46C",
    },
    warning: {
      main: "#FFC666"
    },
    error: {
      main: "#FF405D",
    }
  },
  typography: {
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 40,
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 30,
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 20,
    },
    fontFamily: "'Poppins', sans-serif",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          "box-sizing": "border-box",
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
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <ThemeProvider theme={createTheme(defaultTheme)}>
        <CssBaseline />
        <Styleguide />
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default App;
