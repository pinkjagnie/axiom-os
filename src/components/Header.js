import React from "react";

import Navigation from "./Navigation";

import classes from "./Header.module.css";
import logo from "../img/logo_220-50.svg";

const Header = () => {
  return (
    <header className={classes.headerSection}>
      <div className={classes.headerContainer}>
        <img src={logo} alt="AxiomOS logo" className={classes.logo} />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
