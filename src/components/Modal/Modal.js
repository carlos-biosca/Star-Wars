import './Modal.css'

import ModalLogo from '../../assets/images/modal-logo.png'

export default function Modal ({ closeModal }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <img src={ModalLogo} alt="" />
        <h2 className="modal__title">sign in</h2>
        <form className="modal__form">
          <input type="text" name="user" id="user" required aria-required="true" />
          <input type="password" name="password" id="password" required aria-required="true" />
          <button className="modal__form-button">Sign in</button>
        </form>
        <div>
          <a href="#!" className="modal__help">Need help signing in?</a>
        </div>
        <button className="modal__account">Create an Account</button>
        <button className="modal__close" onClick={() => closeModal(false)}><ion-icon name="close-outline"></ion-icon></button>
      </div>
    </div>
  )
}
