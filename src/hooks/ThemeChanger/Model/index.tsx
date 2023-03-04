import { Theme } from "@mui/material/styles";

export type ThemeChangerState = {
  theme: Theme;
};

export type ThemeChangerContextType = ThemeChangerState & {
  changePrimaryColor: (primaryColor: string) => void;
  changeSecondaryColor: (secondaryColor: string) => void;
  changeInfoColor: (infoColor: string) => void;
  changeSuccessColor: (successColor: string) => void;
  changeWarningColor: (warningColor: string) => void;
  changeErrorColor: (errorColor: string) => void;
  changeBorderRadius: (borderRadius: number) => void;
  changeTypography: (typography: string) => void;
  toggleColorMode: () => void;
  resetTheme: () => void;
};

export type ChangableThemeState = {
  primaryColor?: string;
  secondaryColor?: string;
  infoColor?: string;
  successColor?: string;
  warningColor?: string;
  errorColor?: string;
  borderRadius?: number;
  typography?: string;
  defaultTheme?: Theme;
};
