import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import { Container } from "@material-ui/core";

export const ContentContainer = withTheme(styled(Container)`
  padding: ${(props) => props.theme.spacing(6, 0, 6)};
`);
