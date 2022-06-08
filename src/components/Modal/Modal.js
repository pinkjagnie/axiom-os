import closeBtn from "../../img/closeX_200-200.svg"

import classes from "./Modal.module.css";

const Modal = (props) => {

  let title = '';
  let content = '';

  if (props.errorMessage !== '') {
    title = <h1 style={{color: '#9b0000'}}>Ups!</h1>;
    content = <p style={{color: '#9b0000'}}>Something went wrong. {props.errorMessage}!</p>
  } else if (props.errorMessage === '') {
    title = <p>Thank you!</p>;
    content = <p>Thank you for subscribing to the list! Now, you only have to check your email to confirm and that will be all.</p>
  }

  return(
    <div className={classes.modalSection}>
      <div className={classes.modal}>
        <img src={closeBtn} alt="" className={classes.closeButton} onClick={props.onClose}/>
        <div className={classes.text}>
          {title}
          {content}
        </div>
        <button className={classes.closing} onClick={props.onClose}>Close</button>
      </div>
    </div>
  )
};

export default Modal;