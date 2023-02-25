import styled from "styled-components";
import MuiContainer from "@mui/material/Container";

export const Container = styled(MuiContainer)`
  padding: ${({ theme }) => theme.spacing(6, 0)};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding: ${({ theme }) => theme.spacing(6, 2)};
  }
`;
