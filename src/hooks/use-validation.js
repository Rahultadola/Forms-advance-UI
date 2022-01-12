import React, { useState } from 'react';

const useInputValidation = (validationFunction) => {
	const [enteredInput, setEnteredInput] = useState('');
	const [isTouched, setIsTouched] = useState(false);	

	const enteredInputIsValid = validationFunction(enteredInput)//enteredName.trim() !== '';
	const inputIsInvalid = !enteredInputIsValid && isTouched;
	
	const inputClass = !inputIsInvalid ? 'form-control' : 'form-control invalid';

	const onChangeInputHandler = event => {
		setEnteredInput(event.target.value);
	};

	const onBlurInputHandler = event => {
		setIsTouched(true);
	};

	const resetInput = () => {
		setEnteredInput('');
		setIsTouched(false);
	};

	return {
		enteredInput,
		isTouched,
		enteredInputIsValid,
		inputIsInvalid,
		onChangeInputHandler,
		onBlurInputHandler,
		inputClass,
		resetInput,
	}
};

export default useInputValidation;