import { ChangableThemeState, ThemeChangerState } from "./Model";

export enum ThemeChangerActionKind {
  changePrimaryColor = "changePrimaryColor",
  changeSecondaryColor = "changeSecondaryColor",
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
  switch (type) {
    case ThemeChangerActionKind.changePrimaryColor:
      return {
        ...state,
        theme: {
          ...state.theme,
          palette: {
            ...state.theme.palette,
            primary: {
              ...state.theme.palette.primary,
              main: payload.primaryColor ?? state.theme.palette.primary.main,
            },
          },
        },
      };
    case ThemeChangerActionKind.changeSecondaryColor:
      return {
        ...state,
        theme: {
          ...state.theme,
          palette: {
            ...state.theme.palette,
            secondary: {
              ...state.theme.palette.secondary,
              main:
                payload.secondaryColor ?? state.theme.palette.secondary.main,
            },
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
