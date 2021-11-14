import { useState } from 'react';

const useValidation = (validateInputs, setIsValid) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState([]);

  const handleBlur = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    setErrors(validateInputs(name, value, errors));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(errors).every(error => error === '')) {
      setIsValid(true)
    }
  };

  return { handleBlur, errors, handleSubmit, values }
};

export default useValidation;