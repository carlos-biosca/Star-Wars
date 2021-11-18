import './FormLogin.css'

import Input from '../Input/Input'
import Button from '../Button/Button'

export default function FormLogin ({ openModal, closeModal, users, setLogged, setInvalid }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, password } = e.target
    for (let user of users) {
      if ((name.value.trim() === user.displayname || name.value.trim() === user.email) && password.value.trim() === user.password) {
        setLogged({ display: user.displayname, login: true })
        closeModal(false)
        return
      }
    }
    setInvalid(true)
  }

  return (
    <form className="modal__form" onSubmit={(e) => handleSubmit(e)}>
      <Input type={'text'} id={'name'} text={'Username or Email Address'} />
      <Input type={'password'} id={'password'} text={"Password"} />
      <button className="form__submit" aria-label='Sign in'>Sign in</button>
      <div className="form__help">
        <a href="#!">Need help signing in?</a>
      </div>
      <Button name={"form__account"} open={() => { openModal(true); closeModal(false); }} text={'Create an Account'} />
    </form>
  )
}
