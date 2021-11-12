import { useState } from 'react/cjs/react.development'

import './Modal.css'

import ModalLogo from '../../assets/images/modal-logo.png'

import Input from '../Input/Input'
import Button from '../Button/Button'

export default function Modal ({ closeModal, openModal, title }) {
  const [selectAria, setSelectAria] = useState()

  return (
    <div className="modal">
      <div className="modal__container" onClick={(e) => e.target.id !== 'password' && setSelectAria(false)}>
        <img src={ModalLogo} alt="" className="modal__logo" />
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form">
          {
            title === 'sign in' ? (
              <>
                <Input type={'text'} id={'name'} text={'Username or Email Address'} />
                <Input type={'password'} id={'password'} text={"Password"} />
                <Button name={"modal__submit"} text={'Sign in'} />
                <div className="modal__help">
                  <a href="#!">Need help signing in?</a>
                </div>
                <Button name={"modal__account"} open={() => { closeModal(false); openModal(true); }} text={'Create an Account'} />
              </>
            ) : (
              <>
                <Input type={'text'} id={'firstname'} text={'First Name'} />
                <Input type={'text'} id={'lastname'} text={'Last Name'} />
                <Input type={'email'} id={'email'} text={'Email Address'} />
                <Input type={'text'} id={'displayname'} text={'Display Name'} />
                <div>
                  <input type="password" name="password" id="password" className="modal__input modal__input--expand" placeholder="Password" onSelect={() => setSelectAria(true)} />
                  {
                    selectAria && (
                      <ul className="modal__list">
                        <li>Enter at least 6 characters.</li>
                        <li>Don't use the password from another account.</li>
                        <li>Use letters together with spaces, numbers, or symbols (!@#$%^&amp;*).</li>
                      </ul>
                    )
                  }
                  <div className="modal__show">
                    <input type="checkbox" name="show" id="show" className="modal__checkbox" />
                    <label htmlFor="show">Show password</label>
                  </div>
                </div>
                <Button name={"modal__submit"} text={'Create Account'} />
                <p className="modal__footer">Already have an account? <a href="#!" onClick={() => { closeModal(false); openModal(true); }}>Sign In</a></p>
              </>
            )
          }
        </form>
        <Button name={"modal__close"} open={() => closeModal(false)} text={<ion-icon name="close-outline"></ion-icon>} />
      </div>
    </div>
  )
}
