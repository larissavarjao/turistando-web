import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { theme, GlobalStyle } from './style/globalStyle';
import App from './containers/App/index';
import { history } from './context/history';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
