import { createGlobalStyle } from 'styled-components';
import { theme } from './data';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body, h1, h2, h3, h4, div, p, section, header, main, hr {
    margin: 0;
    padding: 0;
  }

  body {
    font: ${theme.font.all};
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
    border-color: ${theme.blue700} !important;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
