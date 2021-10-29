import React, { useCallback, useState } from "react";
import {
  Button,
  Divider,
  FormControl,
  Theme,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import { createStyles, makeStyles, useTheme } from "@material-ui/styles";
import { HexColorPicker } from "react-colorful";
import ThemeConfiguration from "../components/ThemeConfiguration";
import { defaultTheme } from "../App";

interface ThemeChangerProps {
  onThemeChange: (newTheme: Theme) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      "& > *": {
        margin: theme.spacing(1),
        float: "right",
      },
    },
  })
);

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

  return (
    <ThemeConfiguration>
      <FormControl>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Cores</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">
              Cor primária ({newTheme.palette.primary.main})
            </Typography>
            <HexColorPicker
              color={newTheme.palette.primary.main}
              onChange={onPrimaryColorChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">
              Cor secundária ({newTheme.palette.secondary.main})
            </Typography>
            <HexColorPicker
              color={newTheme.palette.secondary.main}
              onChange={onSecondaryColorChange}
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
      </FormControl>
    </ThemeConfiguration>
  );
};

export default ThemeChanger;
