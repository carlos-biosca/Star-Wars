import logo from '../../assets/images/logo.jpg'
import './Header.css'

export default function Header () {
  return (
    <div className="header">
      <img src={logo} alt="Star Wars" className="header__logo" />
      <div>
        <button aria-label="log in">LOG IN</button>
        <button aria-label="sign up">SIGN UP</button>
      </div>
    </div>
  )
}
