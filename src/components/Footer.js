import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faTelegram, faPaypal } from "@fortawesome/free-brands-svg-icons";

import classes from "./Footer.module.css";

const Footer = () => { 
  return (
    <div className={classes.footerSection}>
      <div className={classes.container}>
        <div className={classes.copyright}>
          <p>&copy; AxiomOS project</p>
          <p>Want to contact with us? <a href="mailto:contact@axiomos.pl" className={classes.mail}>Just send us an email</a></p>
          <p>Built with <span className={classes.author} role="img" aria-label="Love">&#9829;</span> by <span className={classes.author}>PinkLlama</span></p>
        </div>
        <div className={classes.socialContainer}>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} className={classes.social} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faGithub} className={classes.social} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTelegram} className={classes.social} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faPaypal} className={classes.social} />
          </a>
        </div>
      </div>
    </div>
  )
};

export default Footer;