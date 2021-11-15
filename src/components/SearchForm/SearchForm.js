import './SearchForm.css'
import Button from '../Button/Button'


export default function SearchForm ({ openLoginModal, openRegisterModal, logged, setLogged }) {
  return (
    <div>
      <form className="search__form">
        <input type="text" placeholder="Search Star Wars" className="search__input" />
        <button arial-label="search-icon" onClick={(e) => e.preventDefault()} className="search__button"><ion-icon name="search-outline"></ion-icon></button>
      </form>
      {
        !logged ? (
          <div className="button-group">
            <Button open={() => openLoginModal(true)} text={'LOG IN'} name={'login__button'} />
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes*/}
            <span>//</span>
            <Button open={() => openRegisterModal(true)} text={'SIGN UP'} name={'signup__button'} />
          </div>
        ) : (
          <div className="login__status">
            <div className="login__user">
              <ion-icon name="person-circle-outline"></ion-icon>
              <span>Welcome</span>
            </div>
            <Button open={() => setLogged(false)} text={'LOG OUT'} name={'logout__button'} />
          </div>
        )
      }

    </div>
  )
}
