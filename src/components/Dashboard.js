import React from 'react';
import BasicNavbar from './navigation-components/BasicNavbar';
import SideNavbar from './navigation-components/SideNavbar';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const {user} = useUser();
  return (
    <div className="dashboard">
      <BasicNavbar role={user.role}/>
      <SideNavbar role={user.role}></SideNavbar>
    </div>
  );
};

export default Dashboard;
