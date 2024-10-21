import { signOut } from "../../api/UserApi";
import LogoutButton from "../auth-components/LogoutButton";
import { NavLink } from "react-router-dom";

const BasicNavbar = ({ role }) => { 
  function handleSideMenuVisibility() {
    console.log(role)
    let sideMenu = document.getElementById("side-menu-div");
    if (sideMenu.className === "side-closed-div") {
      sideMenu.className = "side-opened-div";
    } else if (sideMenu.className === "side-opened-div") {
      sideMenu.className = "side-closed-div";
    }
  }

  return (
    <div id="menu-div">
      <img id="logo-img" src='/images/icon-large.png' alt="FITHUB" />
      {role === 'client' && (
        <>
          <NavLink to="/" className="menu-item-link" id="home-link">Home</NavLink>
          <NavLink to="/books" className="menu-item-link" id="books-link">Books</NavLink>
          <NavLink to="/shelf" className="menu-item-link" id="shelf-link">My Shelf</NavLink>
          <NavLink to="/support" className="menu-item-link" id="support-link">AI Support</NavLink>
        </>
      )}
      {role === 'admin' && (
        <>
          <NavLink to="/books" className="menu-item-link" id="books-link">Books</NavLink>
          <NavLink to="/members" className="menu-item-link" id="members-link">Members</NavLink>
        </>
      )}
      <LogoutButton tag="navbar" />
      <img id="menu-icon-img" src="/images/side-menu-icon.png" alt="MENU" onClick={handleSideMenuVisibility} />
    </div>
  );
}

export default BasicNavbar;
