import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import middleware from './redux/middleware';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import GlobalStyles from './utils/GlobalStyles';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
