import { useState } from 'react/cjs/react.development'

import './Modal.css'

import ModalLogo from '../../assets/images/modal-logo.png'

import Button from '../Button/Button'

import useLocalstorage from '../../hooks/useLocalstorage'

import FormLogin from '../FormLogin/FormLogin'
import FormRegister from '../FormRegister/FormRegister'
import FormSuccess from '../FormSuccess/FormSuccess'

export default function Modal ({ closeModal, openModal, title, setLogged }) {
  const [users, setUsers] = useLocalstorage('users')
  const [success, setSuccess] = useState(false)
  const [invalid, setInvalid] = useState(false)

  return (
    <div className="modal">
      <div className="modal__container">
        {
          !success ? (
            <>
              <img src={ModalLogo} alt="" className="modal__logo" />
              {
                invalid && <p className="modal__invalid">The credentials you entered are incorrect.
                  Reminder: passwords are case sensitive.</p>
              }
              <h2 className="modal__title">{title}</h2>
              {
                title === 'sign in' &&
                <FormLogin openModal={openModal} closeModal={closeModal} users={users} setLogged={setLogged} setInvalid={setInvalid} />
              }
              {
                title === 'create your account' &&
                <FormRegister openModal={openModal} closeModal={closeModal} setUsers={setUsers} setSuccess={setSuccess} />
              }
            </>
          ) : (
            title === 'sign in' ? <FormSuccess text={'Welcome!'} /> : <FormSuccess text={'Registration Completed'} />
          )
        }
        <Button name={"modal__close"} open={() => closeModal(false)} text={<ion-icon name="close-outline"></ion-icon>} />
      </div>
    </div>
  )
}
