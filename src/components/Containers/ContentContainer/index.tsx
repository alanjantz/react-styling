import React from "react";
import { Container } from "./styles";
import { Breakpoint } from "@mui/material";

interface ContentContainerProps {
  maxWidth?: Breakpoint;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  maxWidth = "sm",
  children,
}) => {
  return <Container maxWidth={maxWidth}>{children}</Container>;
};

export default ContentContainer;
