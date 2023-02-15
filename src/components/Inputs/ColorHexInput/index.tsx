import { InputAdornment } from "@material-ui/core";
import React, { useCallback } from "react";
import { TextField } from "./styles";

type ColorHexInputProps = {
  value: string;
  onChange: (newValue: string) => void;
};

const ColorHexInput: React.FC<ColorHexInputProps> = ({ value, onChange }) => {
  const onValueChange = useCallback((newValue: string) => {
    newValue = newValue.trim();
    if (newValue.length > 6) return;
    onChange("#" + newValue);
  }, []);

  return (
    <TextField
      startAdornment={<InputAdornment position="end">#</InputAdornment>}
      value={value}
      onChange={(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => onValueChange(event.target.value)}
    />
  );
};

export default ColorHexInput;
