import React from "react";
import { ColorContainer } from "./styles";

type ColorBoxProps = {
  label?: string;
  color: string;
};

const ColorBox: React.FC<ColorBoxProps> = ({ label, color }) => {
  return (
    <>
      {label && <label>{label}</label>}
      <ColorContainer color={color} />
      <span>{color.toUpperCase()}</span>
    </>
  );
};

export default ColorBox;
