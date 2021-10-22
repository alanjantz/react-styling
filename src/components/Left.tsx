import React from "react";
import Column from "./Column";

const Left: React.FC = ({ children }) => {
  return <Column size={60}>{children}</Column>;
};

export default Left;
