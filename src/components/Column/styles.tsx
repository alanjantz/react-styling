import styled, { css, withTheme } from "styled-components";

export const Container = withTheme(styled.div<{
  width: number;
}>`
  display: inline-block;
  width: ${(props) => props.width}%;
  overflow: auto;
  height: 100vh;
  box-sizing: border-box;
`);
