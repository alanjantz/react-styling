import React from "react";
import Typography from "@mui/material/Typography";
import { ColorContainer } from "./styles";

type ColorBoxProps = {
  label?: string;
  color: string;
};

const ColorBox: React.FC<ColorBoxProps> = ({ label, color }) => {
  return (
    <>
      {label && <Typography variant="subtitle1">{label}</Typography>}
      <ColorContainer color={color} />
      <Typography variant="subtitle2">{color.toUpperCase()}</Typography>
    </>
  );
};

export default ColorBox;
