import { useState, useEffect } from 'react'

import './FormRegister.css'

import Input from '../Input/Input'

import useValidation from '../../hooks/useValidation'

import validateInputs from '../../logic/validate-inputs'
import validateForm from '../../logic/validate-form'

export default function FormRegister ({ openModal, closeModal, setUsers, setSuccessRegister }) {
  const [selectAria, setSelectAria] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const { handleBlur, errors, handleSubmit, values } = useValidation(validateInputs, validateForm, setIsValid)

  useEffect(() => {
    if (isValid) {
      setUsers(users => [...users, values])
      setSuccessRegister(true)
    }
  }, [isValid, setUsers, values, setSuccessRegister]);

  return (
    <form className="modal__form" onSubmit={handleSubmit}>
      <Input type={'text'} id={'firstname'} text={'First Name'} validation={handleBlur} error={errors.firstname} />
      <Input type={'text'} id={'lastname'} text={'Last Name'} validation={handleBlur} error={errors.lastname} />
      <Input type={'email'} id={'email'} text={'Email Address'} validation={handleBlur} error={errors.email} />
      <Input type={'text'} id={'displayname'} text={'Display Name'} validation={handleBlur} error={errors.displayname} />

      <div>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          maxLength="60"
          className={!errors.password ? "input input--expand" : 'input input--expand input--error'}
          placeholder="Password"
          onFocus={() => setSelectAria(true)}
          onBlur={(e) => { handleBlur(e); setSelectAria(false) }}
          onKeyUp={handleBlur}
        />
        <p className="input__errors">{errors.password}</p>
        <ul className={selectAria ? "form__list form__list--show" : "form__list"}>
          <li className={errors.password === 'The password is too short.' ? 'form__condition--error' : ''}>Enter at least 6 characters.</li>
          <li>Don't use the password from another account.</li>
          <li className={errors.password === 'The password is too easily guessed.' ? 'form__condition--error' : ''}>Use letters together with numbers.</li>
        </ul>
        <div className="form__show">
          <input type="checkbox" name="show" id="show" className="form__checkbox" onClick={() => setShowPassword(!showPassword)} />
          <label htmlFor="show">Show password</label>
        </div>
      </div>

      <button className="form__submit" aria-label="create account">Create Account</button>
      <p className="form__footer">Already have an account? <a href="#!" onClick={() => { openModal(true); closeModal(false); }}>Sign In</a></p>
    </form>
  )
}
