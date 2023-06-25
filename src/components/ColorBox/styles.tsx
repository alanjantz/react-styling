import styled from "styled-components";
import MuiTypography from "@mui/material/Typography";

export const ColorContainer = styled.div<{ color: string }>`
  display: block;
  height: ${(props) => props.theme.spacing(6)};
  width: 100%;
  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
  border: 1px solid rgba(0, 0, 0, 0.01);
`;

export const Typography = styled(MuiTypography)`
  color: ${(props) => props.theme.palette.text.primary};
`;
