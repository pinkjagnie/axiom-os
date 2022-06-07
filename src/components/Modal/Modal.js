import closeBtn from "../../img/closeX_200-200.svg"

import classes from "./Modal.module.css";

const Modal = (props) => {

  return(
    <div className={classes.modalSection}>
      <div className={classes.modal}>
        <img src={closeBtn} alt="" className={classes.closeButton} onClick={props.onClose}/>
        <div className={classes.text}>
          {props.success && <h1>Thank you!</h1>}
          {props.error && <h1 style={{color: '#9b0000'}}>Ups!</h1>}
          {props.success && <p>Thank you for subscribing to the list! Now, you only have to check your email to confirm and that will be all.</p>}
          {props.error && <p style={{color: '#9b0000'}}>Something went wrong. {props.errorMessage}</p>}
        </div>
        <button className={classes.closing} onClick={props.onClose}>Close</button>
      </div>
    </div>
  )
};

export default Modal;