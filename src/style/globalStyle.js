import { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryColor: '#5924B0',
  secondaryColor: '#E15A97',
  purpleLightColor: '#f6f3fc',
  grayLightColor: '#e4eaf5',
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  body {
    background: #f6f3fc;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
