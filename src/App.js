import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/data';

import { Switch, Route, Redirect } from 'react-router-dom';

import {
  Home,
  Product,
  Error404,
  Admin,
  Signup,
  Signin,
  Search,
  FAQ
} from './pages';
import { Footer, Header, Loading, AppSidebar } from './components';

import { changeLanguage } from './redux/actions/language';
import { toggleDarkTheme } from './redux/actions/darkTheme';
import { getAuthedUser } from './redux/actions/authedUser';
import { axiosDefault, getSearchSuggestions } from './utils/api';

const App = ({
  darkTheme: dark,
  language,
  authedUser,
  changeLanguage,
  toggleDarkTheme,
  getAuthedUser,
  loading
}) => {
  useEffect(() => {
    getSearchSuggestions('iphone');
    if (localStorage.getItem('token')) {
      axiosDefault.defaults.headers.common['Authorization'] =
        localStorage.getItem('token');
      getAuthedUser();
    }
    if (!authedUser) {
      if (
        localStorage.getItem('language') &&
        localStorage.getItem('language') !== language
      )
        changeLanguage(localStorage.getItem('language'));

      if (localStorage.getItem('dark')) {
        const localDark = JSON.parse(localStorage.getItem('dark'));
        if (localDark !== dark) toggleDarkTheme();
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <ThemeProvider theme={{ ...theme, dark }}>
      {loading ? <Loading /> : null}

      <AppSidebar>
        <Route
          exact
          path={[
            '/',
            '/product/:slug',
            '/404',
            '/search/:keyword',
            '/search/:category',
            '/signin',
            '/signup',
            '/faq'
          ]}
        >
          <Header />
        </Route>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/product/:slug">
            <Product />
          </Route>

          <Route exact path="/404">
            <Error404 />
          </Route>

          <Route exact path="/admin-panel">
            <Admin />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/signin">
            <Signin />
          </Route>

          <Route exact path={['/search/:keyword', '/search/:category']}>
            <Search />
          </Route>

          <Route exact path="/faq">
            <FAQ />
          </Route>

          <Redirect exact from="*" to="/404" />
        </Switch>

        <Route
          exact
          path={[
            '/',
            '/product/:slug',
            '/search/:keyword',
            '/search/:category',
            '/signup',
            '/signup',
            '/faq'
          ]}
        >
          <Footer />
        </Route>
      </AppSidebar>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ darkTheme, language, authedUser, loading }) => ({
  darkTheme,
  language,
  authedUser,
  loading
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: lang => dispatch(changeLanguage(lang)),
  toggleDarkTheme: () => dispatch(toggleDarkTheme()),
  getAuthedUser: () => dispatch(getAuthedUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
