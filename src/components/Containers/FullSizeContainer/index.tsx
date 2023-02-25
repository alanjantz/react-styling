import React from "react";
import { Container } from "./styles";

const FullSizeContainer: React.FC = ({ children }) => {
  return <Container maxWidth="xs">{children}</Container>;
};

export default FullSizeContainer;
