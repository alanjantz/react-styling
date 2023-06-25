import React from "react";
import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import { ThemeProvider as StyledComponentsThemProvider } from "styled-components";

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children, theme } = props;

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledComponentsThemProvider theme={theme}>
          <CssBaseline />
          <>{children}</>
        </StyledComponentsThemProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
