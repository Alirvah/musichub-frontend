import React, { useContext } from "react";
import { GlobalContext } from "../../config/GlobalContext";
import NavbarItems from "../navbar/NavbarItems";
import { NavLink, Redirect } from "react-router-dom";
import mystyles from "../../styles/mystyles.scss";

const Navbar = () => {
  const [global] = useContext(GlobalContext);

  return (
    <nav
      className="navbar is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <NavLink className="navbar-item" to={"/"}>
          <p className="navbar-item title is-4" style={{ color: "white" }}>
            Musichub
          </p>
        </NavLink>
      </div>
      {global.user ? (
        <NavbarItems />
      ) : (
        <p className="navbar-item navbar-end title is-5 is-dark has-text-white">
          M
        </p>
      )}
    </nav>
  );
};

export default Navbar;
