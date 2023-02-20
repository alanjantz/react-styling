import React from "react";
import Column from ".";

const LeftColumn: React.FC = ({ children }) => {
  return <Column size={60}>{children}</Column>;
};

export default LeftColumn;
