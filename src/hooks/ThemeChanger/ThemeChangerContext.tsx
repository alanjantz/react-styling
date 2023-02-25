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

  const changeBorderRadius = useCallback((borderRadius: number): void => {
    dispatch({
      type: ThemeChangerActionKind.changeBorderRadius,
      payload: { borderRadius },
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
      changeBorderRadius,
      toggleColorMode,
      resetTheme,
    }),
    [
      state,
      changePrimaryColor,
      changeSecondaryColor,
      changeBorderRadius,
      toggleColorMode,
      resetTheme,
    ]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ThemeChangerProvider;

export const useThemeChanger = (): ThemeChangerContextType =>
  useContext(Context);
