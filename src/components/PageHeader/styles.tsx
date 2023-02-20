import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export const HeaderContainer = withTheme(styled.div`
  background-color: ${(props) => props.theme.palette.background.paper};
  padding: ${(props) => props.theme.spacing(6, 0, 6)};
`);

export const AlignedContainer = withTheme(styled(Container)`
  display: flex;
  padding: 0px !important;
`);

export const TextField = withTheme(styled(Typography)`
  line-height: ${(props) => props.theme.spacing(6)}px;
  font-weight: 700;
  display: inline-block;
  margin-left: ${(props) => props.theme.spacing(3)}px;
`);

export const Bar = withTheme(styled.div`
  background: ${(props) => props.theme.palette.primary.main};
  display: inline-block;
  width: 6px;
  height: ${(props) => props.theme.spacing(6)}px;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
`);
