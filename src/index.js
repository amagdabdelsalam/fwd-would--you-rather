import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Reducers' 
import middleware from './Middleware'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>, 
  document.getElementById('root')
);

