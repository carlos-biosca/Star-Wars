import { useEffect, useState } from 'react';

const useValidation = (validateInputs, validateForm, setIsValid) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState([]);
  const [submit, setSubmit] = useState(false)

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
    setErrors(validateForm(values));
    setSubmit(true)
  };

  useEffect(() => {
    if (Object.values(errors).every(error => error === '') && submit) {
      setIsValid(true)
    } else {
      setSubmit(false)
    }
  }, [errors, setIsValid, submit])

  return { handleBlur, errors, handleSubmit, values }
};

export default useValidation;