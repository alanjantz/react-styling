import React from "react";
import Column from ".";

const RightColumn: React.FC = ({ children }) => {
  return <Column size={40}>{children}</Column>;
};

export default RightColumn;
