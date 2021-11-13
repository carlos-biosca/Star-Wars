import { useState, useEffect } from 'react';

const useValidation = (validateInputs) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    displayname: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    displayname: '',
    password: ''
  });
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBlur = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    setErrors(validateInputs(name, value, errors));
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  // };

  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       submitForm();
  //     }
  //   },
  //   [errors]
  // );

  // return { handleBlur, handleSubmit, values, errors };
  return {
    handleBlur, errors
  }
};

export default useValidation;