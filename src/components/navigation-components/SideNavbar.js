import React from 'react';
import { NavLink } from "react-router-dom";
import LogoutButton from '../auth-components/LogoutButton';

const SideNavbar = ({ role }) => {
  return (
    <div id="side-menu-div" className="side-closed-div">
      {role === 'client' && (
        <NavLink to="/home" className="side-menu-item-link" id="side-home-link">Home</NavLink>
      )}
      {role === 'client' && (
        <>
          <NavLink to="/books" className="side-menu-item-link" id="side-books-link">Books</NavLink>
          <NavLink to="/shelf" className="side-menu-item-link" id="side-shelf-link">My Shelf</NavLink>
          <NavLink to="/support" className="side-menu-item-link" id="side-support-link">Support</NavLink>
        </>
      )}
      {role === 'admin' && (
        <>
          <NavLink to="/books" className="side-menu-item-link" id="side-books-link">Books</NavLink>
          <NavLink to="/members" className="side-menu-item-link" id="side-members-link">Members</NavLink>
        </>
      )}
      <div id="logout-div">
        <hr />
        <LogoutButton tag="side" />
      </div>
    </div>
  );
}

export default SideNavbar;
