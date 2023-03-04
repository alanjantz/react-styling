import React, {
  useCallback,
  createContext,
  useMemo,
  useContext,
  useReducer,
} from "react";
import { Theme } from "@mui/material/styles";
import { reducer, ThemeChangerActionKind } from "./reducer";
import { ThemeChangerContextType } from "./Model";

const Context = createContext({} as ThemeChangerContextType);

type ThemeChangerProviderProps = {
  defaultTheme: Theme;
};

const ThemeChangerProvider: React.FC<ThemeChangerProviderProps> = ({
  defaultTheme,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, { theme: defaultTheme });

  const changePrimaryColor = useCallback((primaryColor: string): void => {
    dispatch({
      type: ThemeChangerActionKind.changePrimaryColor,
      payload: { primaryColor },
    });
  }, []);

  const changeSecondaryColor = useCallback((secondaryColor: string): void => {
    dispatch({
      type: ThemeChangerActionKind.changeSecondaryColor,
      payload: { secondaryColor },
    });
  }, []);

  const changeInfoColor = useCallback((infoColor: string): void => {
    dispatch({
      type: ThemeChangerActionKind.changeInfoColor,
      payload: { infoColor },
    });
  }, []);

  const changeSuccessColor = useCallback((successColor: string): void => {
    dispatch({
      type: ThemeChangerActionKind.changeSuccessColor,
      payload: { successColor },
    });
  }, []);

  const changeWarningColor = useCallback((warningColor: string): void => {
    dispatch({
      type: ThemeChangerActionKind.changeWarningColor,
      payload: { warningColor },
    });
  }, []);

  const changeErrorColor = useCallback((errorColor: string): void => {
    dispatch({
      type: ThemeChangerActionKind.changeErrorColor,
      payload: { errorColor },
    });
  }, []);

  const changeBorderRadius = useCallback((borderRadius: number): void => {
    dispatch({
      type: ThemeChangerActionKind.changeBorderRadius,
      payload: { borderRadius },
    });
  }, []);

  const changeTypography = useCallback((typography: string): void => {
    dispatch({
      type: ThemeChangerActionKind.changeTypography,
      payload: { typography },
    });
  }, []);

  const toggleColorMode = useCallback((): void => {
    dispatch({
      type: ThemeChangerActionKind.toggleColorMode,
      payload: {},
    });
  }, []);

  const resetTheme = useCallback((): void => {
    dispatch({
      type: ThemeChangerActionKind.resetTheme,
      payload: { defaultTheme },
    });
  }, [defaultTheme]);

  const value = useMemo(
    () => ({
      ...state,
      changePrimaryColor,
      changeSecondaryColor,
      changeInfoColor,
      changeSuccessColor,
      changeWarningColor,
      changeErrorColor,
      changeBorderRadius,
      changeTypography,
      toggleColorMode,
      resetTheme,
    }),
    [
      state,
      changePrimaryColor,
      changeSecondaryColor,
      changeInfoColor,
      changeSuccessColor,
      changeWarningColor,
      changeErrorColor,
      changeBorderRadius,
      changeTypography,
      toggleColorMode,
      resetTheme,
    ]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ThemeChangerProvider;

export const useThemeChanger = (): ThemeChangerContextType =>
  useContext(Context);
