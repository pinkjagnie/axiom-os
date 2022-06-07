import React from "react";

import classes from "./Header.module.css";
import logo from "../img/logo_220-50.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="AxiomOS logo" className={classes.logo} />
    </header>
  );
};

export default Header;
