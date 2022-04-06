import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { store } from './store/store';

import './index.css'

import App from './App';
import { toast } from 'react-toastify';

toast.configure({
  autoClose: 3000,
  draggable: false,
  position: 'top-right',
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnHover: true
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);