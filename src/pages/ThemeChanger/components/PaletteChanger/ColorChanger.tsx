import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ColorPicker from "../../../../components/ColorPicker";

interface ColorChangerProps {
  title: string;
  value: string;
  onChange: (newValue: string) => void;
}

export const ColorChanger: React.FC<ColorChangerProps> = ({
  title,
  value,
  onChange,
}) => {
  return (
    <Grid item xs={6}>
      <Typography gutterBottom>{title}</Typography>
      <ColorPicker color={value} onChange={onChange} />
    </Grid>
  );
};

export default ColorChanger;
