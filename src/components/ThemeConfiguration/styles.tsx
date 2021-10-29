import styled from "styled-components";
import { withTheme } from "@material-ui/styles";

export const Container = withTheme(styled.div`
  padding: ${(props) => props.theme.spacing(2)}px;
  background: ${(props) => props.theme.palette.default};
  height: 100vh;
  border-left: 4px solid ${(props) => props.theme.palette.divider};
`);
