import React, { createContext, useContext, useReducer } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import { reducer } from "./reducer";
import CssBaseline from "@mui/material/CssBaseline";

type ContextType = {};

const Context = createContext({} as ContextType);

const ThemeChangerProvider: React.FC = ({ children }) => {
  const currentTheme: Theme = useTheme();
  const [state, dispatch] = useReducer(reducer, { theme: currentTheme });

  return (
    <Context.Provider value={state}>
      <CssBaseline />
      {children}
    </Context.Provider>
  );
};

export default ThemeChangerProvider;

export const useThemeChanger = (): ContextType => useContext(Context);
