import React from "react";
import Divider from "@mui/material/Divider";
import ContentContainer from "../Containers/ContentContainer";
import { FooterContainer } from "./styles";

const Footer: React.FC = ({ children }) => {
  return (
    <FooterContainer>
      <Divider />
      <ContentContainer>{children}</ContentContainer>
    </FooterContainer>
  );
};

export default Footer;
