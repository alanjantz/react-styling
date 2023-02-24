import React from "react";
import { Container } from "./styles";

const ContentContainer: React.FC = ({ children }) => {
  return <Container maxWidth="sm">{children}</Container>;
};

export default ContentContainer;
