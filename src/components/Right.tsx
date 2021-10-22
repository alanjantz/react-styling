import React from "react";
import Column from "./Column";

const Right: React.FC = ({ children }) => {
  return <Column size={40}>{children}</Column>;
};

export default Right;
