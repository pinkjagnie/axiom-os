import { useRef, useState } from 'react';
import useInput from '../../hooks/use-input';

import classes from "./Form.module.css";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const Form = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const checkboxRef = useRef();

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

  if (firstNameIsValid && emailIsValid && checkboxRef) {
    formIsValid = true;
  }

  // FETCH, POST


  async function addUser(firstNameValue, emailValue) {
    const response = await fetch('http://test.axiomos.pl/api/subuser/register', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        name: firstNameValue,
        email: emailValue
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setIsLoading(false);
      if (res.ok) {
        console.log(res);
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "Something went wrong! Plese check you form!"
          console.log(data);
          //throw new Error(errorMessage);
        });
      }
    })
  };
  
  const checkboxHandler = () => {
    checkboxRef.current.checked = true;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setIsLoading(true);
    
    if (!formIsValid) {
      return;
    }

    addUser(firstNameValue, emailValue);
   
    console.log('Submitted!');
    console.log(firstNameValue, emailValue);
    console.log(checkboxRef.current.checked);

    resetFirstName();
    resetEmail();
    checkboxRef.current.checked = false;
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
          <input type="checkbox" id="checkbox" ref={checkboxRef} onClick={checkboxHandler} />
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
