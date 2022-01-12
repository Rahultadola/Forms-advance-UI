import useInputValidation from '../hooks/use-validation';


const BasicForm = (props) => {
	const nameValidationFunction = (string) => string.trim() !== '';

	const {
		enteredInput: firstNameInput,
		isTouched: firstNameInputIsTouched,
		enteredInputIsValid: firstNameInputIsValid,
		inputIsInvalid: firstNameInputIsInvalid,
		onChangeInputHandler: firstNameChangeHandler,
		onBlurInputHandler: firstNameBlurHandler,
		inputClass: firstNameClass,
		resetInput: resetFirstName,
	} = useInputValidation(nameValidationFunction);

	const {
		enteredInput: lastNameInput,
		isTouched: lastNameInputIsTouched,
		enteredInputIsValid: lastNameInputIsValid,
		inputIsInvalid: lastNameInputIsInvalid,
		onChangeInputHandler: lastNameChangeHandler,
		onBlurInputHandler: lastNameBlurHandler,
		inputClass: lastNameClass,
		resetInput: resetLastName,
	} = useInputValidation(nameValidationFunction);

	const emailValidationFunction = (email) => {
		const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
		const isEmailValid = email.match(regExp) ? true : false;
		return isEmailValid;
	};

	const {
		enteredInput: emailInput,
		isTouched: emailInputIsTouched,
		enteredInputIsValid: emailInputIsValid,
		inputIsInvalid: emailInputIsInvalid,
		onChangeInputHandler: emailChangeHandler,
		onBlurInputHandler: emailBlurHandler,
		inputClass: emailClass,
		resetInput: resetEmail,
	} = useInputValidation(emailValidationFunction);


	const formSubmitHnadler = (event) => {
		event.preventDefault();
		if(!formIsValid) {
			console.log(firstNameInput, lastNameInput, emailInput);
			resetFirstName();
			resetLastName();
			resetEmail()
		}
		
	};

	const formIsValid = (firstNameInputIsValid && lastNameInputIsInvalid && emailInputIsValid) ? true : false;

	return (
		<form onSubmit={formSubmitHnadler}>
			<div className='control-group'>
				<div className={firstNameClass}>
					<label htmlFor='name'>First Name</label>
					<input 
						type='text' 
						id='first-name' 
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
						value={firstNameInput}
					/>
					{firstNameInputIsInvalid && <p className="error-text">Must not be empty.</p>}
				</div>
				<div className={lastNameClass}>
					<label htmlFor='name'>Last Name</label>
					<input 
						type='text' 
						id='last-name'
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
						value={lastNameInput} 
					/>
					{lastNameInputIsInvalid && <p className="error-text">Must not be empty.</p>}
				</div>
			</div>
			<div className={emailClass}>
				<label htmlFor='name'>E-Mail Address</label>
				<input 
					type='email' 
					id="email"
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={emailInput}
				/>
				{emailInputIsInvalid && <p className="error-text">Must enter valid Email, eg qwe@xyz.com</p>}
				
			</div>
			<div className='form-actions'>
				<button 
					type="submit"
					disabled={!formIsValid ? true : false}
				>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
