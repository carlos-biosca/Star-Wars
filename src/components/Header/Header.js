import logo from '../../assets/images/logo.jpg'
import './Header.css'
import Social from '../Social/Social'
import SearchForm from '../SearchForm/SearchForm'

export default function Header ({ openLoginModal, openRegisterModal, logged, setLogged }) {
  return (
    <div className="container">
      <header className="header">
        <Social />
        <a href="/">
          <img src={logo} alt="Star Wars" className="header__logo" />
        </a>
        <SearchForm openLoginModal={openLoginModal} openRegisterModal={openRegisterModal} logged={logged} setLogged={setLogged} />
      </header>
    </div>

  )
}
