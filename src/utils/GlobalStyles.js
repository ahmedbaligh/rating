import { createGlobalStyle } from 'styled-components';
import { theme } from './data';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-family: inherit;
  }

  body, h1, h2, h3, h4, div, p, section, header, main, hr {
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  body {
    font: ${theme.font.all};
  }

  html[dir="rtl"] body {
    font-family: 'Cairo', sans-serif;
  }

  img {
    width: 100%;
    height: auto;
  }

  input, button {
    appearance: none;
    border: none;
    outline: none;
  }

  input:focus {
    transition: ${theme.transitionDuration};
    border-color: ${theme.blue700};
  }

  button {
    cursor: pointer;
    font-family: inherit;
    white-space: nowrap;
  }

  .wrapper {
    width: 85%;
    margin: 0 auto;

    @media (max-width: 767px) {
      width: 100%;
      padding-inline: 35px;
    }
  }
`;

export default GlobalStyles;
