import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/data';

import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, Product, Error404 } from './pages';
import { Footer, Header } from './components';

import { changeLanguage } from './redux/actions/language';
import { toggleDarkTheme } from './redux/actions/darkTheme';
import { getAuthedUser } from './redux/actions/authedUser';
import { apiRequest } from './utils/api';

import { useDidMount } from './hooks';

const App = ({
  darkTheme: dark,
  language,
  authedUser,
  changeLanguage,
  toggleDarkTheme,
  getAuthedUser
}) => {
  useDidMount(() => {
    if (localStorage.getItem('token')) {
      apiRequest.defaults.headers.common['Authorization'] =
        'Bearer ' + localStorage.getItem('token');
      getAuthedUser();
    }
    if (!authedUser) {
      if (localStorage.getItem('language'))
        changeLanguage(localStorage.getItem('language'));

      if (localStorage.getItem('dark')) {
        const localDark = JSON.parse(localStorage.getItem('dark'));
        if (localDark !== dark) toggleDarkTheme();
      }
    }
  }, [
    dark,
    language,
    changeLanguage,
    authedUser,
    toggleDarkTheme,
    getAuthedUser
  ]);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <ThemeProvider theme={{ ...theme, dark }}>
      <Route
        exact
        path={['/', '/product/:slug', '/404-NOT-FOUND']}
        component={Header}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:slug" component={Product} />
        <Route exact path="/404-NOT-FOUND" component={Error404} />
        <Route render={props => <Redirect to="/404-NOT-FOUND" {...props} />} />
      </Switch>
      <Route
        exact
        path={['/', '/product/:slug', '/404-NOT-FOUND']}
        component={Footer}
      />
    </ThemeProvider>
  );
};

const mapStateToProps = ({ darkTheme, language, authedUser }) => ({
  darkTheme,
  language,
  authedUser
});
const mapDispatchToProps = dispatch => ({
  changeLanguage: lang => dispatch(changeLanguage(lang)),
  toggleDarkTheme: () => dispatch(toggleDarkTheme()),
  getAuthedUser: () => dispatch(getAuthedUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
