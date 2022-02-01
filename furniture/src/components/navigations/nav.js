import React from "react";
import "./nav-style.css";
function Nav() {
  return (
    <div className="nav-container primary-color general-padding">
      <div className="logo-container">
        <img src="/assets/imgs/logo.png" />
      </div>
      <ul className="nav-menu-con">
        <NavMenu label="Home" />
        <NavMenu label="About" />
        <NavMenu label="Contacts" />
      </ul>
    </div>
  );
}

const NavMenu = ({ label = "label" }) => {
  return <li className="nav-menu-item text-white">{label}</li>;
};

export default Nav;
