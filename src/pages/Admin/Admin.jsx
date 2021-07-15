import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

import AdminPanel from './Admin.styles';

import { SideBar } from '../../components';
import { AdminAssets } from '../../assets';
import { Scraper } from '../';

const Admin = () => {
  const tab = new URLSearchParams(useLocation().search).get('tab');

  const tabs = [
    { name: 'scraper', icon: AdminAssets.scraper },
    { name: 'roles', icon: AdminAssets.roles }
  ];

  useEffect(() => {
    console.log(tab);
  }, [tab]);
  return (
    <AdminPanel>
      <SideBar tabs={tabs} />
      {(() => {
        switch (tab) {
          case 'scraper':
            return <Scraper />;
          case 'Manager':
            return <div>You are a Manager.</div>;
          default:
            return <div>You are a User.</div>;
        }
      })()}
    </AdminPanel>
  );
};

export default Admin;
