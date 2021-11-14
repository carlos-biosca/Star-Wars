import './FormLogin.css'

import Input from '../Input/Input'
import Button from '../Button/Button'

export default function FormLogin ({ handleSubmit, openModal, closeModal }) {
  return (
    <form className="modal__form" onSubmit={() => handleSubmit()}>
      <Input type={'text'} id={'name'} text={'Username or Email Address'} />
      <Input type={'password'} id={'password'} text={"Password"} />
      <Button name={"form__submit"} text={'Sign in'} />
      <div className="form__help">
        <a href="#!">Need help signing in?</a>
      </div>
      <Button name={"form__account"} open={() => { openModal(true); closeModal(false); }} text={'Create an Account'} />
    </form>
  )
}
