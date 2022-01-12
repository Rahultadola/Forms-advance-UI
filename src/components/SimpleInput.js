import { useState } from 'react';

import useInputValidation from '../hooks/use-validation';

const SimpleInput = (props) => {
  const nameValidationFunction = (string) => string.trim() !== '';
  const {
    enteredInput: enteredName,
    isTouched: enteredNameTouched,
    enteredInputIsValid: enteredNameIsValid,
    inputIsInvalid: nameInputIsInvalid,
    onChangeInputHandler: onChangeNameHandler,
    onBlurInputHandler: onBlurNameHandler,
    inputClass: inputNameClass,
    resetInput: resetNameInput 
  } = useInputValidation(nameValidationFunction);

  const emailValidationFunction = (email) => {
    const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const isEmailValid = email.match(regExp) ? true : false;
    return isEmailValid;
  };

  const {
    enteredInput: enteredEmail,
    isTouched: enteredEmailTouched,
    enteredInputIsValid: enteredEmailIsValid,
    inputIsInvalid: emailInputIsInvalid,
    onChangeInputHandler: onChangeEmailHandler,
    onBlurInputHandler: onBlurEmailHandler,
    inputClass: inputEmailClass,
    resetInput: resetEmailInput,
  } = useInputValidation(emailValidationFunction);

  
  const enteredEmailIsEmpty = enteredEmail.length === 0 && enteredEmailTouched;
  
  const formIsValid = (enteredNameIsValid && enteredEmailIsValid) ? true : false;

  const submitHandler = event => {
    event.preventDefault();
    if (!nameInputIsInvalid && !emailInputIsInvalid) {
      resetNameInput();
      resetEmailInput();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      
        <div className={inputNameClass}>
          <label htmlFor='name'>Your Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={onChangeNameHandler}
            onBlur={onBlurNameHandler}
            value={enteredName}
          />              
        { nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={inputEmailClass}>
        <label htmlFor='name'>Your Email</label>
        <input 
          type='email' 
          id='email' 
          onChange={onChangeEmailHandler}
          onBlur={onBlurEmailHandler}
          value={enteredEmail}
        />
        { enteredEmailIsEmpty &&  <p className="error-text">Email must not be empty.</p>}           
        { emailInputIsInvalid && <p className="error-text">Email must include '@'.</p>}
      </div>
      <div className="form-actions">
        <button disabled={ !formIsValid ? true : false }>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
