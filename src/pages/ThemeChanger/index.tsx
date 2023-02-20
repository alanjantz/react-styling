import React, { useCallback, useState } from "react";
import {
  Button,
  Divider,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import { HexColorPicker } from "react-colorful";
import ThemeConfiguration from "../../components/ThemeConfiguration";
import { defaultTheme } from "../../App";
import { useTheme } from "@material-ui/styles";
import { useStyles } from "./styles";
import ColorHexInput from "../../components/Inputs/ColorHexInput";

type ThemeChangerProps = {
  onThemeChange: (newTheme: Theme) => void;
};

const ThemeChanger: React.FC<ThemeChangerProps> = ({ onThemeChange }) => {
  const currentTheme: Theme = useTheme();
  const [newTheme, setNewTheme] = useState<Theme>(currentTheme);
  const classes = useStyles();

  const onPrimaryColorChange = useCallback(
    (newColor: string): void => {
      setNewTheme({
        ...newTheme,
        palette: {
          ...newTheme.palette,
          primary: {
            ...newTheme.palette.primary,
            main: newColor,
            light: newColor,
            dark: newColor,
          },
        },
      });
    },
    [newTheme]
  );

  const onPrimaryColorTextChange = useCallback(
    (newColor: string): void => {
      onPrimaryColorChange(newColor);
    },
    [onPrimaryColorChange]
  );

  const onSecondaryColorChange = useCallback(
    (newColor: string): void => {
      setNewTheme({
        ...newTheme,
        palette: {
          ...newTheme.palette,
          secondary: {
            ...newTheme.palette.secondary,
            main: newColor,
          },
        },
      });
    },
    [newTheme]
  );

  const onSecondaryColorTextChange = useCallback(
    (newColor: string): void => {
      onSecondaryColorChange(newColor);
    },
    [onSecondaryColorChange]
  );

  const onBorderRadiusChange = useCallback(
    (newBorderRadius: number): void => {
      setNewTheme({
        ...newTheme,
        shape: {
          ...newTheme.shape,
          borderRadius: newBorderRadius,
        },
      });
    },
    [newTheme]
  );

  const onFontFamilyChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>): void => {
      setNewTheme({
        ...newTheme,
        typography: {
          ...newTheme.typography,
          h1: {
            ...newTheme.typography.h1,
            fontFamily: event.target.value as string,
          },
          h2: {
            ...newTheme.typography.h2,
            fontFamily: event.target.value as string,
          },
          h3: {
            ...newTheme.typography.h3,
            fontFamily: event.target.value as string,
          },
          h4: {
            ...newTheme.typography.h4,
            fontFamily: event.target.value as string,
          },
          h5: {
            ...newTheme.typography.h5,
            fontFamily: event.target.value as string,
          },
        },
      });
    },
    [newTheme]
  );

  const onFontSizeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setNewTheme({
        ...newTheme,
        typography: {
          ...newTheme.typography,
          h1: {
            ...newTheme.typography.h1,
            fontSize: Number(event.target.value),
          },
        },
      });
    },
    [newTheme]
  );

  return (
    <ThemeConfiguration>
      <Grid container spacing={3} xs={12}>
        <Grid item xs={12}>
          <Typography variant="h4">Cores</Typography>
        </Grid>

        <Grid item xs={6}>
          <InputLabel id="primary-color-label">Cor primária</InputLabel>
          <HexColorPicker
            color={newTheme.palette.primary.main}
            onChange={onPrimaryColorChange}
          />
          <ColorHexInput
            value={newTheme.palette.primary.main.replace("#", "")}
            onChange={onPrimaryColorTextChange}
            id="primary-color"
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel id="secondary-color-label">Cor secundária</InputLabel>
          <HexColorPicker
            color={newTheme.palette.secondary.main}
            onChange={onSecondaryColorChange}
          />
          <ColorHexInput
            value={newTheme.palette.secondary.main.replace("#", "")}
            onChange={onSecondaryColorTextChange}
            id="secondary-color"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Fonte</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Cabeçalhos</Typography>
        </Grid>
        <Grid item xs={6}>
          <InputLabel id="font-family-select-label">Fonte</InputLabel>
          <Select
            value={newTheme.typography.h1.fontFamily}
            onChange={onFontFamilyChange}
            labelId="font-family-select-label"
          >
            <MenuItem value="'Montserrat', sans-serif">
              Montserrat (Padrão)
            </MenuItem>
            <MenuItem value="'Poppins', sans-serif">Poppins</MenuItem>
            <MenuItem value="Arial">Arial</MenuItem>
            <MenuItem value="cursive">Cursiva</MenuItem>
            <MenuItem value="monospace">Monospace</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Tamanho da fonte (h1)</Typography>
          <TextField
            type="number"
            value={newTheme.typography.h1.fontSize}
            onChange={onFontSizeChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Outros estilos</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Arredondamento</Typography>
          <Slider
            value={newTheme.shape.borderRadius}
            onChange={(
              event: React.ChangeEvent<{}>,
              value: number | number[]
            ) => onBorderRadiusChange(value as number)}
            min={0}
            max={50}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} className={classes.actions} alignContent="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => onThemeChange(newTheme)}
          >
            Atualizar
          </Button>
          <Button
            type="submit"
            onClick={() => {
              onThemeChange(defaultTheme);
              setNewTheme(defaultTheme);
            }}
          >
            Resetar
          </Button>
        </Grid>
      </Grid>
    </ThemeConfiguration>
  );
};

export default ThemeChanger;
