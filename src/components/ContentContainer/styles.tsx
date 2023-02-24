import styled from "styled-components";
import MuiContainer from "@mui/material/Container";

export const Container = styled(MuiContainer)`
  padding: ${(props) => props.theme.spacing(6, 0)};

  @media (max-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    padding: ${(props) => props.theme.spacing(6, 2)};
  }
`;
