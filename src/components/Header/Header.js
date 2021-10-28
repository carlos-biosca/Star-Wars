import logo from '../../assets/images/logo.jpg'
import './Header.css'
import Button from '../Button/Button'

export default function Header () {
  const handleOpenLogin = () => {
    console.log('openLogin');
  }

  const handleOpenSignup = () => {
    console.log('openSignup');
  }

  return (
    <header className="header">
      <img src={logo} alt="Star Wars" className="header__logo" />
      <div>
        <Button open={handleOpenLogin} text={'log in'} />
        <Button open={handleOpenSignup} text={'sign up'} />
      </div>
    </header>
  )
}
