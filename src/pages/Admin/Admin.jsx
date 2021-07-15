import React from 'react';
import { useLocation } from 'react-router';

import AdminPanel from './Admin.styles';

import { SideBar } from '../../components';
import { AdminAssets } from '../../assets';
import { Scraper, Roles } from '../';

const Admin = () => {
  const tab = new URLSearchParams(useLocation().search).get('tab');

  const tabs = [
    { name: 'scraper', icon: AdminAssets.scraper },
    { name: 'roles', icon: AdminAssets.roles }
  ];

  return (
    <AdminPanel>
      <SideBar tabs={tabs} />
      {(() => {
        switch (tab) {
          case 'scraper':
            return <Scraper />;
          case 'roles':
            return <Roles />;
          default:
            return '';
        }
      })()}
    </AdminPanel>
  );
};

export default Admin;
