import { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryColor: '#5924B0',
  secondaryColor: '#E15A97',
  purpleLightColor: '#f6f3fc',
  grayLightColor: '#EBEBEB',
  grayDarkColor: '#D1D5DE',
  grayPurple: '#5b5777',
  white: '#fff',
  black: '#181919',
  textColor: '#181919',
  warningColor: '#eec643',
  errorColor: '#ea3546',
  successColor: '#32e875',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: #181919;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
