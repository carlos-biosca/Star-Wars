import './SearchForm.css'
import Button from '../Button/Button'


export default function SearchForm ({ openLoginModal }) {
  const handleOpenSignup = () => {
    console.log('openSignup');
  }
  return (
    <div>
      <form className="form">
        <input type="text" placeholder="Search Star Wars" className="form__input" />
        <button arial-label="search-icon" onClick={(e) => e.preventDefault()} className="form__button"><ion-icon name="search-outline"></ion-icon></button>
      </form>
      <div className="button-group">
        <Button open={() => openLoginModal(true)} text={'log in'} name={'login__button'} />
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes*/}
        <span>//</span>
        <Button open={handleOpenSignup} text={'sign up'} name={'signup__button'} />
      </div>
    </div>
  )
}
