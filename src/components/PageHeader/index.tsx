import React from "react";
import { Container } from "@material-ui/core";
import { HeaderContainer, TextField, Bar } from "./styles";

const PageHeader: React.FC = ({ children }) => {
  return (
    <HeaderContainer>
      <Container maxWidth="sm" style={{ display: 'flex' }}>
        <Bar />
        <TextField component="h1" variant="h1">
          {children}
        </TextField>
      </Container>
    </HeaderContainer>
  );
};

export default PageHeader;
