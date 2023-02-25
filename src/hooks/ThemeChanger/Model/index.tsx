import { Theme } from "@mui/material/styles";

export type ThemeChangerState = {
  theme: Theme;
};

export type ThemeChangerContextType = ThemeChangerState & {
  changePrimaryColor: (primaryColor: string) => void;
  changeSecondaryColor: (secondaryColor: string) => void;
  changeBorderRadius: (borderRadius: number) => void;
  toggleColorMode: () => void;
  resetTheme: () => void;
};

export type ChangableThemeState = {
  primaryColor?: string;
  secondaryColor?: string;
  borderRadius?: number;
  defaultTheme?: Theme;
};
