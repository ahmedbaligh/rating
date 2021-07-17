import React from 'react';
import { connect } from 'react-redux';
import { Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import SidebarMenu from './AppSlidebar.styles';
import { changeLanguage } from '../../redux/actions/language';

const AppSidebar = ({ children, language, changeLanguage }) => {
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={'aside'}
        animation="slide along"
        vertical="true"
        visible={true}
        onHide={() => {}}
      >
        <SidebarMenu>
          <section>
            <div className="sidebar-items">
              <Link to="/" className="sidebar-item">
                Home
              </Link>
              <Link to="/account" className="sidebar-item">
                My Account
              </Link>
              <Link to="/signin" className="sidebar-item">
                Sign in
              </Link>
              <Link to="/signup" className="sidebar-item">
                Sign up
              </Link>
            </div>
          </section>

          <section>
            <h4>Categories</h4>
            <div className="sidebar-items">
              <span className="sidebar-item">Mobiles</span>
              <span className="sidebar-item">Computers</span>
              <span className="sidebar-item">Sports</span>
              <span className="sidebar-item">Fashion</span>
            </div>
          </section>

          <section>
            <h4>Language</h4>
            <div className="sidebar-items">
              {language === 'en' ? (
                <span
                  onClick={() => changeLanguage(changeLanguage('ar'))}
                  className="sidebar-item"
                >
                  العربية
                </span>
              ) : (
                <span
                  onClick={() => changeLanguage(changeLanguage('en'))}
                  className="sidebar-item"
                >
                  English
                </span>
              )}
            </div>
          </section>
        </SidebarMenu>
      </Sidebar>

      <Sidebar.Pusher dimmed={true}>{children}</Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const mapStateToProps = ({ language }) => ({ language });

const mapDispatchToProps = dispatch => ({
  changeLanguage: lang => dispatch(changeLanguage(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);
