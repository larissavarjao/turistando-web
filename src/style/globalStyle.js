import { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryColor: '#5924B0',
  secondaryColor: '#E15A97',
  purpleLight: '#f6f3fc',
  grayLight: '#EBEBEB',
  grayDark: '#D1D5DE',
  grayPurple: '#5b5777',
  white: '#fff',
  black: '#181919',
  gray: '#898896',
  text: '#181919',
  warning: '#eec643',
  error: '#ea3546',
  success: '#32e875',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: #3c3f51;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
