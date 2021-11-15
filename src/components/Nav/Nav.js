import { NavLink } from "react-router-dom"
import './Nav.css'

export default function Nav ({ logged }) {

  return (
    <nav className="nav">
      <ul aria-label="menu" className="nav__links" id="links">
        <li className="nav__link">
          <NavLink exact to="/">HOME</NavLink>
          <span className="nav__link-bar nav__link-bar--green"></span>
        </li>
        <li className={!logged.login ? 'nav__link disabled' : 'nav__link'}>
          <NavLink exact to="/starships">STARSHIPS</NavLink>
          <span className="nav__link-bar nav__link-bar--blue"></span>
        </li>
        <p className="nav__message">Only avalaible for registered users</p>
      </ul>
    </nav>
  )
}
