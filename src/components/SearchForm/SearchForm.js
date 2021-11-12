import './SearchForm.css'
import Button from '../Button/Button'


export default function SearchForm ({ openLoginModal, openRegisterModal }) {
  return (
    <div>
      <form className="form">
        <input type="text" placeholder="Search Star Wars" className="form__input" />
        <button arial-label="search-icon" onClick={(e) => e.preventDefault()} className="form__button"><ion-icon name="search-outline"></ion-icon></button>
      </form>
      <div className="button-group">
        <Button open={() => openLoginModal(true)} text={'LOG IN'} name={'login__button'} />
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes*/}
        <span>//</span>
        <Button open={() => openRegisterModal(true)} text={'SIGN UP'} name={'signup__button'} />
      </div>
    </div>
  )
}
