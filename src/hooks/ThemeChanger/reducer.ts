import { darken, lighten, PaletteColor } from "@mui/material";
import { ChangableThemeState, ThemeChangerState } from "./Model";

export enum ThemeChangerActionKind {
  changePrimaryColor = "changePrimaryColor",
  changeSecondaryColor = "changeSecondaryColor",
  changeInfoColor = "changeInfoColor",
  changeSuccessColor = "changeSuccessColor",
  changeWarningColor = "changeWarningColor",
  changeErrorColor = "changeErrorColor",
  changeBorderRadius = "changeBorderRadius",
  changeTypography = "changeTypography",
  toggleColorMode = "toggleColorMode",
  resetTheme = "resetTheme",
}

type Actions = {
  type: ThemeChangerActionKind;
  payload: ChangableThemeState;
};

export const reducer = (
  state: ThemeChangerState,
  action: Actions
): ThemeChangerState => {
  const { type, payload } = action;
  const COLOR_COEFFICIENT = 0.1;

  const getNewPaletteColor = (color: string): PaletteColor => {
    return {
      main: color,
      light: lighten(color, COLOR_COEFFICIENT),
      dark: darken(color, COLOR_COEFFICIENT),
      contrastText: state.theme.palette.getContrastText(color),
    };
  };

  switch (type) {
    case ThemeChangerActionKind.changePrimaryColor:
      const primaryColor =
        payload.primaryColor ?? state.theme.palette.primary.main;
      return {
        ...state,
        theme: {
          ...state.theme,
          palette: {
            ...state.theme.palette,
            primary: getNewPaletteColor(primaryColor),
          },
        },
      };
    case ThemeChangerActionKind.changeSecondaryColor:
      const secondaryColor =
        payload.secondaryColor ?? state.theme.palette.secondary.main;
      return {
        ...state,
        theme: {
          ...state.theme,
          palette: {
            ...state.theme.palette,
            secondary: getNewPaletteColor(secondaryColor),
          },
        },
      };
    case ThemeChangerActionKind.changeInfoColor:
      const infoColor = payload.infoColor ?? state.theme.palette.info.main;
      return {
        ...state,
        theme: {
          ...state.theme,
          palette: {
            ...state.theme.palette,
            info: getNewPaletteColor(infoColor),
          },
        },
      };
    case ThemeChangerActionKind.changeSuccessColor:
      const successColor =
        payload.successColor ?? state.theme.palette.success.main;
      return {
        ...state,
        theme: {
          ...state.theme,
          palette: {
            ...state.theme.palette,
            success: getNewPaletteColor(successColor),
          },
        },
      };
    case ThemeChangerActionKind.changeWarningColor:
      const warningColor =
        payload.warningColor ?? state.theme.palette.warning.main;
      return {
        ...state,
        theme: {
          ...state.theme,
          palette: {
            ...state.theme.palette,
            warning: getNewPaletteColor(warningColor),
          },
        },
      };
    case ThemeChangerActionKind.changeErrorColor:
      const errorColor = payload.errorColor ?? state.theme.palette.error.main;
      return {
        ...state,
        theme: {
          ...state.theme,
          palette: {
            ...state.theme.palette,
            error: getNewPaletteColor(errorColor),
          },
        },
      };
    case ThemeChangerActionKind.changeBorderRadius:
      return {
        ...state,
        theme: {
          ...state.theme,
          shape: {
            ...state.theme.shape,
            borderRadius:
              payload.borderRadius ?? state.theme.shape.borderRadius,
          },
        },
      };
    case ThemeChangerActionKind.changeTypography:
      return {
        ...state,
        theme: {
          ...state.theme,
          components: {
            ...state.theme.components,
            MuiTypography: {
              defaultProps: {
                fontFamily: payload.typography,
              },
            },
          },
          typography: {
            ...state.theme.typography,
            fontFamily: payload.typography,
            h1: {
              ...state.theme.typography.h1,
              fontFamily: payload.typography,
            },
            h2: {
              ...state.theme.typography.h2,
              fontFamily: payload.typography,
            },
            h3: {
              ...state.theme.typography.h3,
              fontFamily: payload.typography,
            },
            h4: {
              ...state.theme.typography.h4,
              fontFamily: payload.typography,
            },
            h5: {
              ...state.theme.typography.h5,
              fontFamily: payload.typography,
            },
            h6: {
              ...state.theme.typography.h6,
              fontFamily: payload.typography,
            },
            body1: {
              ...state.theme.typography.body1,
              fontFamily: payload.typography,
            },
            body2: {
              ...state.theme.typography.body2,
              fontFamily: payload.typography,
            },
            button: {
              ...state.theme.typography.button,
              fontFamily: payload.typography,
            },
            caption: {
              ...state.theme.typography.caption,
              fontFamily: payload.typography,
            },
            subtitle1: {
              ...state.theme.typography.subtitle1,
              fontFamily: payload.typography,
            },
            subtitle2: {
              ...state.theme.typography.subtitle2,
              fontFamily: payload.typography,
            },
            overline: {
              ...state.theme.typography.overline,
              fontFamily: payload.typography,
            },
          },
        },
      };
    case ThemeChangerActionKind.toggleColorMode:
      return {
        ...state,
        theme: {
          ...state.theme,
          palette: {
            ...state.theme.palette,
            mode: state.theme.palette.mode === "light" ? "dark" : "light",
          },
        },
      };
    case ThemeChangerActionKind.resetTheme:
      return payload.defaultTheme
        ? { ...state, theme: payload.defaultTheme }
        : state;
    default:
      return state;
  }
};
