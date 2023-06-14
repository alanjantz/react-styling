import React from "react";
import { createTheme } from "@mui/material/styles";
import ThemeChangerContext from "../../hooks/ThemeChanger/ThemeChangerContext";
import ThemeChanger from "../ThemeChanger";
import ChangableThemeContainer from "../ChangableThemeContainer";
import ThemeProvider from "../../components/ThemeProvider";
import Grid from "@mui/material/Grid";
import { Column } from "./components";

const defaultTheme = createTheme({
  palette: {
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
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "'Poppins', sans-serif",
      },
    },
  },
});

const muiTheme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeChangerContext defaultTheme={defaultTheme}>
      <Grid container spacing={2} style={{ marginTop: 0 }}>
        <Column item xs={12} md={8}>
          <ChangableThemeContainer />
        </Column>
        <Column item xs={12} md={4}>
          <ThemeProvider theme={muiTheme}>
            <ThemeChanger />
          </ThemeProvider>
        </Column>
      </Grid>
    </ThemeChangerContext>
  );
};

export default App;
