import React from "react";

import { GiPawHeart } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faTelegram, faPaypal, faPatreon } from "@fortawesome/free-brands-svg-icons";

import classes from "./Footer.module.css";

const Footer = () => { 
  return (
    <div className={classes.footerSection}>
      <div className={classes.container}>
        <div className={classes.copyright}>
          <p>&copy; AxiomOS project</p>
          <p>Want to contact with us? <a href="mailto:contact@axiomos.pl" className={classes.mail}>Just send us an email</a></p>
          <p>Built with <GiPawHeart className={classes.author} /> by <span><a href="https://github.com/pinkjagnie" target="_blank" rel="noopener noreferrer" className={classes.author}>PinkJagnie</a></span></p>
        </div>
        <div className={classes.socialContainer}>
          <a href="https://twitter.com/axiomos_aosp" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className={classes.social} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className={classes.social} />
          </a>
          <a href="https://t.me/axiomoshub" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} className={classes.social} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPaypal} className={classes.social} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPatreon} className={classes.social} />
          </a>
        </div>
      </div>
    </div>
  )
};

export default Footer;