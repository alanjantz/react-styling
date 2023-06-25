import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import { useThemeChanger } from "../../hooks/ThemeChanger/ThemeChangerContext";
import ColorPicker from "../../components/ColorPicker";
import ThemeSwitch from "../../components/ThemeSwitch";

const ThemeChanger: React.FC = () => {
  const {
    theme,
    changePrimaryColor,
    changeSecondaryColor,
    changeInfoColor,
    changeSuccessColor,
    changeWarningColor,
    changeErrorColor,
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
              <Typography variant="h6">Colors</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Primary</Typography>
              <ColorPicker
                color={theme.palette.primary.main}
                onChange={changePrimaryColor}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Secondary</Typography>
              <ColorPicker
                color={theme.palette.secondary.main}
                onChange={changeSecondaryColor}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Info</Typography>
              <ColorPicker
                color={theme.palette.info.main}
                onChange={changeInfoColor}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Success</Typography>
              <ColorPicker
                color={theme.palette.success.main}
                onChange={changeSuccessColor}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Warning</Typography>
              <ColorPicker
                color={theme.palette.warning.main}
                onChange={changeWarningColor}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Danger</Typography>
              <ColorPicker
                color={theme.palette.error.main}
                onChange={changeErrorColor}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Typography</Typography>
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
                  <MenuItem value={"'Montserrat', sans-serif"}>
                    Montserrat
                  </MenuItem>
                  <MenuItem value={"'Roboto', sans-serif"}>Roboto</MenuItem>
                  <MenuItem value={"monospace"}>Monospace</MenuItem>
                  <MenuItem value={"cursive"}>Cursive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Theme mode</Typography>
            </Grid>
            <Grid item xs={6}>
              <ThemeSwitch />
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThemeChanger;
