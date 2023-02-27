import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { HexColorPicker } from "react-colorful";
import { useThemeChanger } from "../../hooks/ThemeChanger/ThemeChangerContext";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const ThemeChanger: React.FC = () => {
  const {
    theme,
    changePrimaryColor,
    changeSecondaryColor,
    changeBorderRadius,
    changeTypography,
    resetTheme,
  } = useThemeChanger();

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Colors</Typography>
            </Grid>
            <Grid item xs={6}>
              <HexColorPicker
                color={theme.palette.primary.main}
                onChange={changePrimaryColor}
              />
            </Grid>
            <Grid item xs={6}>
              <HexColorPicker
                color={theme.palette.secondary.main}
                onChange={changeSecondaryColor}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Typography</Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Select
                  labelId="typography-select-label"
                  id="typography-select"
                  value={theme.typography.fontFamily}
                  onChange={(event: SelectChangeEvent) => {
                    changeTypography(event.target.value);
                  }}
                  fullWidth
                >
                  <MenuItem value={"'Poppins', sans-serif"}>
                    Default (Poppins)
                  </MenuItem>
                  <MenuItem value={"monospace"}>Monospace</MenuItem>
                  <MenuItem value={"cursive"}>Cursive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Typography>Border radius</Typography>
          <Slider
            aria-label="Border radius"
            value={theme.shape.borderRadius}
            getAriaValueText={() => theme.shape.borderRadius.toString()}
            valueLabelDisplay="auto"
            onChange={(event: Event, value: number | number[]) =>
              changeBorderRadius(value as number)
            }
            step={1}
            min={0}
            max={20}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="text"
            onClick={() => {
              resetTheme();
            }}
          >
            Resetar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThemeChanger;
