import styled from "styled-components";
import MaterialTextField from "@mui/material/TextField";

export const TextField = styled(MaterialTextField)`
  margin-top: ${(props) => props.theme.spacing(1)};
  width: 200px;
  border-radius: 8px;

  & > input {
    padding: 10px;
  }

  & > fieldset {
    border-width: 2px;
  }
`;
