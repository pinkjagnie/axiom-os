import React from "react";

// import {motion} from "framer-motion";

import classes from "./Navigation.module.css";

const Navigation = () => {
  // const animateFrom = {opacity: 0, y: -40};
  // const animateTo = {opacity: 1, y: 0};

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