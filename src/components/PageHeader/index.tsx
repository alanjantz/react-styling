import React from "react";
import { Container } from "@material-ui/core";
import { HeaderContainer, TextField } from "./styles";

const PageHeader: React.FC = ({ children }) => {
  return (
    <HeaderContainer>
      <Container maxWidth="sm">
        <TextField component="h1" variant="h1">
          {children}
        </TextField>
      </Container>
    </HeaderContainer>
  );
};

export default PageHeader;
