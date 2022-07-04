import React from "react";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return(
    <div className={classes.navBar}>
      <nav>
        <ul>
          <li>
            <a href="https://blog.axiomos.pl/" target="_blank" rel="noopener noreferrer" className={classes.link}>Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Navigation;