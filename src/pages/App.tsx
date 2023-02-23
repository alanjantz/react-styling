import React from "react";
import { createTheme } from "@mui/material/styles";
import ThemeProvider from "../components/ThemeProvider";
import Styleguide from "./Styleguide/index";
import ThemeChangerContext from "../hooks/ThemeChanger/ThemeChangerContext";

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
    <ThemeProvider theme={defaultTheme}>
      <ThemeChangerContext>
        <Styleguide />
      </ThemeChangerContext>
    </ThemeProvider>
  );
};

export default App;
