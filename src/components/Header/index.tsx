import React from "react";
import ContentContainer from "../Containers/ContentContainer";
import { HeaderContainer, TextField, Bar } from "./styles";

const PageHeader: React.FC = ({ children }) => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <Bar />
        <TextField variant="h1">{children}</TextField>
      </ContentContainer>
    </HeaderContainer>
  );
};

export default PageHeader;
