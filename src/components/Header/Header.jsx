import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { changeLanguage } from '../../redux/actions/language';
import { toggleDarkTheme } from '../../redux/actions/darkTheme';
import { toggleSideBar } from '../../redux/actions/sideBarOn';

import AppHeader from './Header.styles';
import { NavToggler, Dropdown, SearchBar } from '../';
import { languages, staticText } from '../../utils/data';
import { appLogo, appLogoMin } from '../../assets';

const Header = ({
  language,
  changeLanguage,
  darkTheme,
  toggleDarkTheme,
  toggleSideBar
}) => {
  return (
    <AppHeader>
      <div className="options group">
        <NavToggler action={() => toggleSideBar()} />
        <Dropdown
          options={languages}
          value={language}
          onChange={() => changeLanguage(language === 'en' ? 'ar' : 'en')}
        />
      </div>

      <Link to="/" className="site-logo">
        <picture>
          <source media="(max-width: 650px)" srcSet={appLogoMin} />
          <img src={appLogo} alt="Site Logo" />
        </picture>
      </Link>

      <div className="options group">
        <div className="header-search">
          <SearchBar
            placeholder={staticText.header.searchPlaceholder[language]}
            language={language}
            transparent
            display="inline"
          />
        </div>

        <div className="icons">
          <Icon name="heart outline" className="saved-items" />
          <Icon name="user outline" className="user-account" />
          <Icon
            name={`${darkTheme ? 'sun' : 'moon'} outline`}
            onClick={toggleDarkTheme}
            className="theme-toggler"
          />
        </div>
      </div>
    </AppHeader>
  );
};

const mapDispatchToProps = dispatch => ({
  changeLanguage: lang => dispatch(changeLanguage(lang)),
  toggleDarkTheme: () => dispatch(toggleDarkTheme()),
  toggleSideBar: () => dispatch(toggleSideBar())
});

const mapStateToProps = ({ language, darkTheme }) => ({ language, darkTheme });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
