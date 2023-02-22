import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.spacing(2)};
  background: ${(props) => props.theme.palette.default};
  height: 100vh;
  border-left: 4px solid ${(props) => props.theme.palette.divider};
`;
