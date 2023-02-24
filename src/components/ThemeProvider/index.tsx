import React from "react";
import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import { ThemeProvider as StyledComponentsThemProvider } from "styled-components";

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider {...props}>
        <StyledComponentsThemProvider {...props}>
          <>{children}</>
        </StyledComponentsThemProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
