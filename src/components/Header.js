import React from "react";

import classes from "./Header.module.css";
import logo from "../img/logo_250-100.jpg";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="AxiomOS logo" className={classes.logo} />
    </header>
  );
};

export default Header;
