import './SearchForm.css'

import Button from '../Button/Button'

export default function SearchForm ({ openLoginModal, openRegisterModal, logged, setLogged }) {
  return (
    <div>
      <form className="search__form">
        <input type="text" placeholder="Search Star Wars" className="search__input" data-testid={'search-input'}/>
        <button arial-label="search-icon" onClick={(e) => e.preventDefault()} className="search__button" data-testid={'search-btn'}><ion-icon name="search-outline"></ion-icon></button>
      </form>
      {
        logged.login ? (
          <div className="login__status">
            <div className="login__user">
              <span><ion-icon name="person-circle-outline"></ion-icon></span>
              <span data-testid={'logged-user'}>{logged.display}</span>
            </div>
            <Button open={() => setLogged({ display: '', login: false })} text={'LOG OUT'} name={'login__button'} dataTestId={'log-out-btn'}/>
          </div>
        ) : (
          <div className="button-group">
            <Button open={() => openLoginModal(true)} text={'LOG IN'} name={'login__button'} dataTestId={'log-in-btn'} />
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes*/}
            <span>//</span>
            <Button open={() => openRegisterModal(true)} text={'SIGN UP'} name={'login__button'} dataTestId={'signup-btn'}/>
          </div>
        )
      }

    </div>
  )
}
