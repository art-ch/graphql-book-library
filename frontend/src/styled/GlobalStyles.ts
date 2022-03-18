import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', serif;
  }
  
  h1, 
  h2,
  h3 {
    font-weight: 400;
  }
`;

export default GlobalStyle;
