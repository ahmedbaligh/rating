import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import 'semantic-ui-css/semantic.min.css';
import App from './App';
import GlobalStyles from './utils/GlobalStyles';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
