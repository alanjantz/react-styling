import React from "react";
import { Container } from "./styles";

interface ColumnProps {
  size: number;
}

const Column: React.FC<ColumnProps> = ({ size, children }) => {
  return <Container width={size}>{children}</Container>;
};

export default Column;
