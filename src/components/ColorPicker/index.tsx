import React, { useState, useCallback } from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import { HexColorPicker } from "react-colorful";
import {
  Popover,
  PopoverContent,
  Button,
  ColorBox,
  IconButton,
} from "./styles";

type ColorPickerProps = {
  color: string;
  onChange: (newColor: string) => void;
};

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [newColor, setNewColor] = useState<string>(color);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = useCallback(() => {
    setAnchorEl(null);
    onChange(newColor);
  }, [onChange, newColor, setAnchorEl]);

  const popoverOpen = Boolean(anchorEl);

  return (
    <>
      <Button onClick={handleClick}>
        <ColorBox color={color} />
        <IconButton>
          <PaletteIcon />
        </IconButton>
      </Button>

      <Popover
        id={popoverOpen ? "simple-popover" : undefined}
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <PopoverContent>
          <HexColorPicker
            color={newColor}
            onChange={(newColor) => setNewColor(newColor)}
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ColorPicker;
