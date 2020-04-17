import { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryColor: '#5924B0',
  secondaryColor: '#E15A97',
  purpleLightColor: '#f6f3fc',
  grayLightColor: '#e4eaf5',
  grayPurple: '#5b5777',
  white: '#fff',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
