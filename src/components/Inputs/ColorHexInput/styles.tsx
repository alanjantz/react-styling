import styled from "styled-components";
import { OutlinedInput } from "@material-ui/core";
import { withTheme } from "@material-ui/styles";

export const TextField = withTheme(styled(OutlinedInput)`
  margin-top: ${(props) => props.theme.spacing(1)}px;
  width: 200px;
  border-radius: 8px;

  & > input {
    padding: 10px;
  }

  & > fieldset {
    border-width: 2px;
  }
`);
