import { ChangableThemeState, ThemeChangerState } from "./Model";

export enum ThemeChangerActionKind {
  changePrimaryColor = "changePrimaryColor",
  changeSecondaryColor = "changeSecondaryColor",
  changeBorderRadius = "changeBorderRadius",
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
