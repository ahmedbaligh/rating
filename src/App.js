import React from 'react';

import { connect } from 'react-redux';

import { changeLanguage } from './redux/actions/language';
import { toggleDarkTheme } from './redux/actions/darkTheme';

const App = ({ changeLanguage, toggleDarkTheme, language, darkTheme }) => {
  return <div>Rating</div>;
};

const mapDispatchToProps = dispatch => ({
  changeLanguage: lang => dispatch(changeLanguage(lang)),
  toggleDarkTheme: () => dispatch(toggleDarkTheme())
});

const mapStateToProps = ({ language, darkTheme }) => ({ language, darkTheme });

export default connect(mapStateToProps, mapDispatchToProps)(App);
