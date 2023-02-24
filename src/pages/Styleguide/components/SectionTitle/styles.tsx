import styled from "styled-components";
import MuiTypography from "@mui/material/Typography";

export const Typography = styled(MuiTypography)<{ $bold: boolean }>`
  ${({ $bold }) =>
    $bold &&
    `
    font-weight: bold;
    `}
`;
