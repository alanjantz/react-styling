import React, { useCallback } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "./styles";

type ColorHexInputProps = {
  id: string;
  value: string;
  onChange: (newValue: string) => void;
};

const ColorHexInput: React.FC<ColorHexInputProps> = ({
  id,
  value,
  onChange,
}) => {
  const onValueChange = useCallback((newValue: string) => {
    newValue = newValue.trim();
    if (newValue.length > 6) return;
    onChange("#" + newValue);
  }, []);

  return (
    <TextField
      id={id}
      variant="outlined"
      InputProps={{
        startAdornment: <InputAdornment position="start">#</InputAdornment>,
      }}
      value={value}
      onChange={(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => onValueChange(event.target.value)}
    />
  );
};

export default ColorHexInput;
