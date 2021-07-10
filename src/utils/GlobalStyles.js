import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: inherit;
  }

  body, h1, h2, h3, h4, div, p, section, header, main, hr {
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  body {
    font: 600 16px 'Montserrat', sans-serif;
  }

  img {
    width: 100%;
    height: auto;
  }
  button{
    cursor: pointer;
    font-family: inherit;
  }
  
`;

export default GlobalStyles;
