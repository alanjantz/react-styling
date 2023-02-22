import styled from "styled-components";
import { Container, Typography } from "@mui/material";

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.palette.background.paper};
  padding: ${(props) => props.theme.spacing(6, 0, 6)};
`;

export const AlignedContainer = styled(Container)`
  display: flex;
  padding: 0px !important;
`;

export const TextField = styled(Typography)`
  line-height: ${(props) => props.theme.spacing(6)};
  font-weight: 700;
  display: inline-block;
  margin-left: ${(props) => props.theme.spacing(3)};
`;

export const Bar = styled.div`
  background: ${(props) => props.theme.palette.primary.main};
  display: inline-block;
  width: 6px;
  height: ${(props) => props.theme.spacing(6)};
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
`;
