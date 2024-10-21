import { signOut } from "../../api/UserApi";
import LogoutButton from "../auth-components/LogoutButton";

import { NavLink } from "react-router-dom";


const BasicNavbar = () => { 
  function handleHamburgerMenu() {
    let hamburgerMenu = document.getElementById("hamburger-menu-div")
    if(hamburgerMenu.className === "hamburger-closed-div") {
      hamburgerMenu.className = "hamburger-opened-div"
    } else if(hamburgerMenu.className === "hamburger-opened-div") {
      hamburgerMenu.className = "hamburger-closed-div"
    }
  }

  return (
    <div id="menu-div">
      <img id="logo-img" src='/images/logo.png' alt="FITHUB"></img>
      <NavLink to="/" className="menu-item-link" id="home-link">Home</NavLink>
      <NavLink to="/books" className="menu-item-link" id="books-link">Books</NavLink>
      <NavLink to="/shelf" className="menu-item-link" id="shelf-link">My Shelf</NavLink>
      <NavLink to="/support" className="menu-item-link" id="support-link">AI Support</NavLink>
      <LogoutButton tag="navbar"/>
      <img id="menu-icon-img" src="/images/hamburger-menu-icon.png" alt="MENU" onClick={ () => { handleHamburgerMenu() }}></img>
    </div>
  );
}

export default BasicNavbar;