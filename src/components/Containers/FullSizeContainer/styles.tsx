import styled from "styled-components";
import MuiContainer from "@mui/material/Container";

export const Container = styled(MuiContainer)`
  padding: 0px !important;
  margin: 0px !important;
  max-width: none;
  background-color: ${(props) => props.theme.palette.background.default};
`;
