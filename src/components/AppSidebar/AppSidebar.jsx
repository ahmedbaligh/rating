import React from 'react';
import { connect } from 'react-redux';
import { Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import SidebarMenu from './AppSlidebar.styles';
import { changeLanguage } from '../../redux/actions/language';
import { toggleSideBar } from '../../redux/actions/sideBarOn';
import { staticText } from '../../utils/data';

const AppSidebar = ({
  children,
  language,
  changeLanguage,
  toggleSideBar,
  sideBarOn
}) => {
  const { sidebar } = staticText;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={'aside'}
        animation="slide along"
        vertical="true"
        visible={sideBarOn}
        onHide={toggleSideBar}
        direction={language === 'ar' ? 'right' : 'left'}
      >
        <SidebarMenu>
          <section>
            <div className="sidebar-items">
              {sidebar.general.items.map(item => (
                <Link key={item.slug} to={item.slug} className="sidebar-item">
                  {item[language]}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h4>{sidebar.categories.title[language]}</h4>
            <div className="sidebar-items">
              {sidebar.categories.items.map(item => (
                <span key={item['en']} className="sidebar-item">
                  {item[language]}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h4>{sidebar.languages.title[language]}</h4>
            <div className="sidebar-items">
              {sidebar.languages.items.map(
                ({ key, name }) =>
                  key !== language && (
                    <span
                      key={key}
                      onClick={() => changeLanguage(key)}
                      className="sidebar-item"
                    >
                      {name}
                    </span>
                  )
              )}
            </div>
          </section>
        </SidebarMenu>
      </Sidebar>

      <Sidebar.Pusher dimmed={sideBarOn}>{children}</Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const mapStateToProps = ({ language, sideBarOn }) => ({ language, sideBarOn });

const mapDispatchToProps = dispatch => ({
  changeLanguage: lang => dispatch(changeLanguage(lang)),
  toggleSideBar: () => dispatch(toggleSideBar())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);
