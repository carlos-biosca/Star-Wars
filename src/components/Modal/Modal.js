import { useState, useEffect } from 'react/cjs/react.development'

import './Modal.css'

import ModalLogo from '../../assets/images/modal-logo.png'

import Input from '../Input/Input'
import Button from '../Button/Button'

import useLocalstorage from '../../hooks/useLocalstorage'
import useValidation from '../../hooks/useValidation'

import validateInputs from '../../logic/validate-inputs'

export default function Modal ({ closeModal, openModal, title }) {
  const [users, setUsers] = useLocalstorage('users')
  const [isValid, setIsValid] = useState(false)
  const [selectAria, setSelectAria] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { handleBlur, errors, handleSubmit, values } = useValidation(validateInputs, setIsValid)

  useEffect(() => {
    if (isValid) setUsers(users => [...users, values])
  }, [isValid, setUsers, values]);

  return (
    <div className="modal">
      <div className="modal__container" onClick={(e) => e.target.id !== 'password' && setSelectAria(false)}>
        <img src={ModalLogo} alt="" className="modal__logo" />
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          {
            title === 'sign in' & !isValid ? (
              <>
                <Input type={'text'} id={'name'} text={'Username or Email Address'} />
                <Input type={'password'} id={'password'} text={"Password"} />
                <Button name={"modal__submit"} text={'Sign in'} />
                <div className="modal__help">
                  <a href="#!">Need help signing in?</a>
                </div>
                <Button name={"modal__account"} open={() => { closeModal(false); openModal(true); }} text={'Create an Account'} />
              </>
            ) : ''
          }
          {
            title === 'sign in' & isValid ? (
              <div>login</div>
            ) : ''
          }
          {
            title === 'create your account' & !isValid ? (
              <>
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
                    className={!errors.password ? "modal__input modal__input--expand" : 'modal__input modal__input--expand modal__input--error'}
                    placeholder="Password"
                    onSelect={() => setSelectAria(true)}
                    onBlur={handleBlur}
                  />
                  <p className="modal__errors">{errors.password}</p>
                  <ul className={selectAria ? "modal__list modal__list--show" : "modal__list"}>
                    <li className={errors.password === 'The password is too short.' ? 'modal__condition--error' : ''}>Enter at least 6 characters.</li>
                    <li>Don't use the password from another account.</li>
                    <li className={errors.password === 'The password is too easily guessed.' ? 'modal__condition--error' : ''}>Use letters together with numbers.</li>
                  </ul>
                  <div className="modal__show">
                    <input type="checkbox" name="show" id="show" className="modal__checkbox" onClick={() => setShowPassword(!showPassword)} />
                    <label htmlFor="show">Show password</label>
                  </div>
                </div>

                <button className="modal__submit" aria-label="create account">Create Account</button>
                <p className="modal__footer">Already have an account? <a href="#!" onClick={() => { closeModal(false); openModal(true); }}>Sign In</a></p>
              </>
            ) : ''
          }
          {
            title === 'sign in' & isValid ? (
              <div>registered</div>
            ) : ''
          }
        </form>
        <Button name={"modal__close"} open={() => closeModal(false)} text={<ion-icon name="close-outline"></ion-icon>} />
      </div>
    </div>
  )
}
