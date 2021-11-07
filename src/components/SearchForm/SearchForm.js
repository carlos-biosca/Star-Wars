import './SearchForm.css'
import Button from '../Button/Button'


export default function SearchForm () {
  const handleOpenLogin = () => {
    console.log('openLogin');
  }

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
        <Button open={handleOpenLogin} text={'log in'} name={'login__button'} />
        <span>//</span>
        <Button open={handleOpenSignup} text={'sign up'} name={'signup__button'} />
      </div>
    </div>
  )
}
