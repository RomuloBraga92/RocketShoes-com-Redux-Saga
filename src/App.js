import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import history from './services/history';
import store from './store';

import GlobalStyles from './styles/global';
import Header from './Components/Header/index';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoclose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
