import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore, { history } from './redux/configureStore';
import Router from './Router';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js';

const store= configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router  history={history}/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
