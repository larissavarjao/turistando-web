import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/index';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './style/globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
