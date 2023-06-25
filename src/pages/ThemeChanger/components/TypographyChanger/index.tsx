import React from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useThemeChanger } from "../../../../hooks/ThemeChanger/ThemeChangerContext";

export const TypographyChanger: React.FC = () => {
  const { theme, changeTypography } = useThemeChanger();

  return (
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
        <MenuItem value={"'Poppins', sans-serif"}>Default (Poppins)</MenuItem>
        <MenuItem value={"'Montserrat', sans-serif"}>Montserrat</MenuItem>
        <MenuItem value={"'Roboto', sans-serif"}>Roboto</MenuItem>
        <MenuItem value={"monospace"}>Monospace</MenuItem>
        <MenuItem value={"cursive"}>Cursive</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TypographyChanger;
