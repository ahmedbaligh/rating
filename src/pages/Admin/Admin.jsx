import React from 'react';
import { useLocation } from 'react-router';

import AdminPanel from './Admin.styles';

import { SideBar } from '../../components';
import { AdminAssets } from '../../assets';
import { Scraper, Roles } from '../';

const Admin = () => {
  const tab = new URLSearchParams(useLocation().search).get('tab');

  const tabsComponent = {
    scraper: <Scraper />,
    roles: <Roles />
  };

  const tabs = [
    { name: 'scraper', icon: AdminAssets.scraper },
    { name: 'roles', icon: AdminAssets.roles }
  ];

  return (
    <AdminPanel>
      <SideBar tabs={tabs} />
      {tabsComponent[tab]}
    </AdminPanel>
  );
};
export default Admin;
