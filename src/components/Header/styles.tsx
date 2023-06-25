import styled from "styled-components";
import { Typography } from "@mui/material";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.palette.background.paper};
`;

export const TextField = styled(Typography)`
  line-height: ${(props) => props.theme.spacing(6)};
  font-weight: 700;
  display: inline-block;
  margin-left: ${(props) => props.theme.spacing(3)};
  color: ${(props) => props.theme.palette.text.primary};
`;

export const Bar = styled.div`
  background: ${(props) => props.theme.palette.primary.main};
  display: inline-block;
  position: absolute;
  width: 6px;
  height: ${(props) => props.theme.spacing(6)};
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
`;
