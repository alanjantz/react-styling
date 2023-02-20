import styled from "styled-components";
import { withTheme } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

export const HeaderContainer = withTheme(styled.div`
  background-color: ${(props) => props.theme.palette.background.paper};
  padding: ${(props) => props.theme.spacing(6, 0, 6)};
`);

export const TextField = withTheme(styled(Typography)`
  line-height: 40px;
  margin-left: 30px;
  font-weight: 700;

  &:before {
    content: "";
    background: ${(props) => props.theme.palette.primary.main};
    position: absolute;
    margin-left: -30px;
    width: 6px;
    height: 40px;
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
  }
`);
