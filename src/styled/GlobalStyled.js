import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  body {
    overflow-x: hidden;
    line-height: 1.6;
  }

  #root {
    height: 100%;
  }

  button, input {
    font-family: inherit;
  }
`;