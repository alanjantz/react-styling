import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-content: stretch;
  align-items: stretch;
  justify-content: space-between;
  padding: 0px;
`;

export const IconButton = styled.div`
  padding: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.palette.action.active};
  background-color: ${({ theme }) => theme.palette.divider};

  -webkit-border-top-right-radius: ${({ theme }) => theme.shape.borderRadius}px;
  -webkit-border-bottom-right-radius: ${({ theme }) =>
    theme.shape.borderRadius}px;
  -moz-border-radius-topright: ${({ theme }) => theme.shape.borderRadius}px;
  -moz-border-radius-bottomright: ${({ theme }) => theme.shape.borderRadius}px;
  border-top-right-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border-bottom-right-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

type ColorBoxProps = {
  color: string;
};

export const ColorBox = styled.div<ColorBoxProps>`
  width: 100%;
  background-color: ${({ color }) => color} !important;
  -webkit-border-top-left-radius: ${({ theme }) => theme.shape.borderRadius}px;
  -webkit-border-bottom-left-radius: ${({ theme }) =>
    theme.shape.borderRadius}px;
  -moz-border-radius-topleft: ${({ theme }) => theme.shape.borderRadius}px;
  -moz-border-radius-bottomleft: ${({ theme }) => theme.shape.borderRadius}px;
  border-top-left-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border-bottom-left-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;
