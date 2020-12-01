import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import { theme, GlobalStyle } from './style/globalStyle';
import App from './containers/App/index';
import { history } from './context/history';
import GlobalContextProvider from './context/globalContext';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <GlobalContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </GlobalContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
