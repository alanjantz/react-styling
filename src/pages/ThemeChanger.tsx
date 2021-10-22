import React, { useCallback, useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Theme,
} from "@material-ui/core";
import ThemeConfiguration from "../components/ThemeConfiguration";
import { useTheme } from "@material-ui/styles";

interface ThemeChangerProps {
  onThemeChange: (newTheme: Theme) => void;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({ onThemeChange }) => {
  const currentTheme: Theme = useTheme();
  const [newTheme, setNewTheme] = useState<Theme>(currentTheme);

  const handleChange = useCallback(
    (value: string): void => {
      setNewTheme({
        ...newTheme,
        palette: {
          ...newTheme.palette,
          primary: {
            ...newTheme.palette.primary,
            main: value,
          },
        },
      } as Theme);
    },
    [newTheme, setNewTheme]
  );

  return (
    <ThemeConfiguration>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => handleChange(e.target.value)}
          type="color"
        />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
        <Button type="submit" onClick={() => onThemeChange(newTheme)}>
          Atualizar
        </Button>
      </FormControl>
    </ThemeConfiguration>
  );
};

export default ThemeChanger;
