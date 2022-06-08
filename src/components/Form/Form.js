import { useRef, useState, React, Fragment } from 'react';
import useInput from '../../hooks/use-input';

import Modal from '../Modal/Modal';

import classes from "./Form.module.css";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const Form = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

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

  // if (firstNameIsValid && emailIsValid && checkboxRef.current.checked) {
  //   formIsValid = true;
  // }

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  async function addUser(firstNameValue, emailValue) {
    let errorModalMessage = '';
    const response = await fetch('https://cors-anywhere.herokuapp.com/http://test.axiomos.pl/api/subuser/register', {
      method: 'POST',
      body: JSON.stringify({
        name: firstNameValue,
        email: emailValue
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        console.log(res);
        setModalIsShown(true);
        // return res.json();
        errorModalMessage = '';
                  setErrorMessage(errorModalMessage)

      } else {
        return res.json().then((data) => {
          setModalIsShown(true);
          errorModalMessage = data.error;
          setErrorMessage(errorModalMessage)
        });
      }
    })
  };
  
  const submitHandler = (event) => {
    event.preventDefault();

    // setIsLoading(true);
    if (firstNameIsValid && emailIsValid && checkboxRef.current.checked) {
      formIsValid = true;
    } else {
      return;
    }
    // TODO recaftor conditions
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
    formIsValid = false;
  };

  // const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  // const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <Fragment>
    <div className={classes.formSection}>
    {modalIsShown && <Modal onClose={hideModalHandler} errorMessage={errorMessage} />}
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
          <input type="checkbox" id="checkbox" ref={checkboxRef} />
          <label htmlFor="checkbox">
            By subscribing to the list, you have a chance to meet a very cool
            Sheep. But if you are a girl, then don't count on too much cause
            Sheep already has super cool Sheep-girl - sorry!
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
    </Fragment>
  );
};

export default Form;
