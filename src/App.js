import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Footer, Header } from './components';
import { theme } from './utils/data';
import Product from './pages/Product/Product';

import { changeLanguage } from './redux/actions/language';
import { toggleDarkTheme } from './redux/actions/darkTheme';

const App = ({
  darkTheme: dark,
  language,
  authedUser,
  changeLanguage,
  toggleDarkTheme
}) => {
  let mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      if (!authedUser) {
        if (localStorage.getItem('language'))
          changeLanguage(localStorage.getItem('language'));
        else localStorage.setItem('language', language);

        if (localStorage.getItem('dark')) {
          const localDark = JSON.parse(localStorage.getItem('dark'));
          if (localDark !== dark) toggleDarkTheme();
        } else localStorage.setItem('dark', dark);
      }
      mounted.current = true;
    }
  }, [dark, language, changeLanguage, authedUser, toggleDarkTheme]);

  useEffect(() => {
    localStorage.setItem('dark', dark);
  }, [dark]);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <ThemeProvider theme={{ ...theme, dark }}>
      <Header />
      <Product />
      <Footer />
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
  toggleDarkTheme: () => dispatch(toggleDarkTheme())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
