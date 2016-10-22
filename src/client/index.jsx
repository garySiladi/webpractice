import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/app/index.js';
require('./css/index.css')
require('../client/css/font-awesome/css/font-awesome.css');

const logger = createLogger();
const store = createStore(
  allReducers,
  compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : fn => fn
  )
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root'));
