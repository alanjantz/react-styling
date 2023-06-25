import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";
import { useThemeChanger } from "../../hooks/ThemeChanger/ThemeChangerContext";
import ColorModeSwitch from "./components/ColorModeSwitch";
import PaletteChanger from "./components/PaletteChanger";
import TypographyChanger from "./components/TypographyChanger";

const ThemeChanger: React.FC = () => {
  const { theme, changeBorderRadius, resetTheme } = useThemeChanger();

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Colors</Typography>
            </Grid>
            <Grid item xs={12}>
              <PaletteChanger />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Typography</Typography>
            </Grid>
            <Grid item xs={6}>
              <TypographyChanger />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Theme mode</Typography>
            </Grid>
            <Grid item xs={6}>
              <ColorModeSwitch />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Shape</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Border radius</Typography>
              <Slider
                aria-label="Border radius"
                value={theme.shape.borderRadius}
                getAriaValueText={() => theme.shape.borderRadius.toString()}
                valueLabelDisplay="auto"
                onChange={(_, value: number | number[]) =>
                  changeBorderRadius(value as number)
                }
                step={1}
                min={0}
                max={20}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="text"
            onClick={() => {
              resetTheme();
            }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThemeChanger;
