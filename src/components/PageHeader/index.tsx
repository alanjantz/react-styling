import React from "react";
import { HeaderContainer, AlignedContainer,TextField, Bar } from "./styles";

const PageHeader: React.FC = ({ children }) => {
  return (
    <HeaderContainer>
      <AlignedContainer maxWidth="sm">
        <Bar />
        <TextField component="h1" variant="h1">
          {children}
        </TextField>
      </AlignedContainer>
    </HeaderContainer>
  );
};

export default PageHeader;
