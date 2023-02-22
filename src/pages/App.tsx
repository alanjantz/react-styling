import React from "react";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "styled-components";
import Styleguide from "./Styleguide/index";

export const defaultTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F5F6FA",
    },
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
      main: "#FFC666",
    },
    error: {
      main: "#FF405D",
    },
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
});

const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={defaultTheme}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <ThemeProvider theme={createTheme(defaultTheme)}>
            <CssBaseline />
            <Styleguide />
          </ThemeProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
