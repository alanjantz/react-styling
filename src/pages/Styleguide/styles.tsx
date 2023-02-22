import styled from "styled-components";
import Container from "@mui/material/Container";

export const ContentContainer = styled(Container)`
  padding: ${(props) => props.theme.spacing(6, 0, 6)};
`;
