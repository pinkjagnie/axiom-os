import useInput from '../../hooks/use-input';

import classes from "./Form.module.css";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const Form = (props) => {

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    if (!formIsValid) {
      return;
    }


    console.log('Submitted!');
    console.log(firstNameValue, emailValue);

    resetFirstName();
    resetEmail();
  };

  // const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  // const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <div className={classes.formSection}>
      <div className={classes.blank}></div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" value={firstNameValue} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        </div>
        <div className={classes.check}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">
            By subscribing to the list, you have a chance to meet a very cool
            Sheep. But if you are a girl, then don't count on too much cause
            Sheep already has super cool Sheep-girl - sorry!
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
