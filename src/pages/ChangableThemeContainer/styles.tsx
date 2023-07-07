import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  height: 100vh;
  overflow-y: auto;
`;
