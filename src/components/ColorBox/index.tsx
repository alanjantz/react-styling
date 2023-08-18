import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { ColorContainer } from "./styles";

type ColorBoxProps = {
  label?: string;
  color: string;
};

const ColorBox: React.FC<ColorBoxProps> = ({ label, color }) => {
  const theme = useTheme();

  return (
    <>
      {label && (
        <Typography variant="subtitle1" color={theme.palette.text.primary}>
          {label}
        </Typography>
      )}
      <ColorContainer color={color} />
      <Typography variant="subtitle2" color={theme.palette.text.secondary}>
        {color.toUpperCase()}
      </Typography>
    </>
  );
};

export default ColorBox;
