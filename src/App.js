import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages';
import { Header } from './components';
import { theme } from './utils/data';

const App = ({ darkTheme: dark, language }) => {
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <ThemeProvider theme={{ ...theme, dark }}>
      <Header />
      <Home />
    </ThemeProvider>
  );
};

const mapStateToProps = ({ darkTheme, language }) => ({ darkTheme, language });

export default connect(mapStateToProps)(App);
