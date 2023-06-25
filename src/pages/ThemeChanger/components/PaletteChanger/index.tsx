import React from "react";
import Grid from "@mui/material/Grid";
import { useThemeChanger } from "../../../../hooks/ThemeChanger/ThemeChangerContext";
import ColorChanger from "./ColorChanger";

export const PaletteChanger: React.FC = () => {
  const {
    theme,
    changePrimaryColor,
    changeSecondaryColor,
    changeInfoColor,
    changeSuccessColor,
    changeWarningColor,
    changeErrorColor,
  } = useThemeChanger();

  return (
    <Grid container spacing={2}>
      <ColorChanger
        title="Primary"
        value={theme.palette.primary.main}
        onChange={changePrimaryColor}
      />
      <ColorChanger
        title="Secondary"
        value={theme.palette.secondary.main}
        onChange={changeSecondaryColor}
      />
      <ColorChanger
        title="Info"
        value={theme.palette.info.main}
        onChange={changeInfoColor}
      />
      <ColorChanger
        title="Success"
        value={theme.palette.success.main}
        onChange={changeSuccessColor}
      />
      <ColorChanger
        title="Warning"
        value={theme.palette.warning.main}
        onChange={changeWarningColor}
      />
      <ColorChanger
        title="Danger"
        value={theme.palette.error.main}
        onChange={changeErrorColor}
      />
    </Grid>
  );
};

export default PaletteChanger;
