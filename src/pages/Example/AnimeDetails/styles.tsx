import styled from "styled-components";

export const DetailsContainer = styled.div`
  background: ${({ theme }) => theme.palette.divider};
  padding: ${({ theme }) => theme.spacing(2, 4)};
`;

export const Synopsis = styled.p`
  margin: 0;
`;
