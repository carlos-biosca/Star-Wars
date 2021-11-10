import logo from '../../assets/images/logo.jpg'
import './Header.css'
import Social from '../Social/Social'
import SearchForm from '../SearchForm/SearchForm'

export default function Header () {
  return (
    <div className="container">
      <header className="header">
        <Social />
        <a href="/">
          <img src={logo} alt="Star Wars" className="header__logo" />
        </a>
        <SearchForm />
      </header>
    </div>

  )
}
