import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AdminAssets } from '../../assets';
import { staticText } from '../../utils/data';
import { logout } from '../../redux/actions/authedUser';

import Aside from './SideBar.styled';

const SideBar = ({ tabs, language, logout }) => {
  const history = useHistory();
  const activeTab = new URLSearchParams(useLocation().search).get('tab');

  useEffect(() => {
    if (!tabs.find(tab => tab.name === activeTab)) {
      history.push({ search: `?tab=${tabs[0].name}` });
    }
  }, [activeTab, history, tabs]);

  return (
    <Aside className="side-bar">
      <Link to="/" className="tab">
        <img src={AdminAssets.home} alt="Home"></img>{' '}
        {staticText.side.home[language]}
      </Link>
      <div className="tabs">
        {tabs.map((tab, i) => (
          <Link
            to={{ search: `?tab=${tab.name}` }}
            key={`sbtb${i}`}
            className={`tab ${activeTab === tab.name ? 'active' : ''}`}
          >
            <img src={tab.icon} alt={tab.name}></img>
            {staticText.side[tab.name][language] || tab.name}
          </Link>
        ))}
      </div>
      <button className="tab" onClick={logout}>
        <img src={AdminAssets.logout} alt="logout"></img>{' '}
        {staticText.side.logout[language]}
      </button>
    </Aside>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
const mapStateToProps = ({ language }) => ({ language });
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
