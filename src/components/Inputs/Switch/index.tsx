import React from "react";
import { SwitchProps } from "@mui/material/Switch";
import { CustomSwitch } from "./styles";

const Switch: React.FC<SwitchProps> = (props) => {
  return <CustomSwitch {...props} />;
};

export default Switch;
