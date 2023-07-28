import styled from "styled-components";
import MuiCard from "@mui/material/Card";
import MuiContainer from "@mui/material/Container";
import MuiStack from "@mui/material/Stack";

export const DetailsContainer = styled.div`
  background: ${({ theme }) => theme.palette.divider};
  padding: ${({ theme }) => theme.spacing(2, 4)};
`;

export const Synopsis = styled.p`
  margin: 0;
`;

export const Stack = styled(MuiStack)`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const CarouselContainer = styled(MuiContainer)`
  padding: ${({ theme }) => theme.spacing(1)} 0px;

  button.rec-arrow {
    color: ${({ theme }) => theme.palette.action.active};
    width: auto;
    height: auto;
    min-width: auto;
    min-height: auto;
    line-height: inherit;
  }

  button.rec-arrow,
  button.rec-arrow:hover {
    background: transparent;
    box-shadow: none;
  }

  button.rec-arrow:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  button.rec.rec-arrow:disabled {
    color: ${({ theme }) => theme.palette.action.disabled};
  }

  .rec-pagination {
    display: none;
  }
`;

export const Card = styled(MuiCard)`
  width: 200px;
  height: 250px;
`;
