import { Link } from "react-router-dom"
import './Nav.css'

export default function Nav () {

  const handleActiveClass = (e) => {
    const links = document.querySelectorAll('.nav__link')
    for (let link of links) {
      link.firstChild.classList.remove('active')
    }
    e.target.classList.add('active')
  }

  return (
    <nav className="nav">
      <ul aria-label="menu" className="nav__links" id="links">
        <li className="nav__link" onClick={(e) => handleActiveClass(e)}>
          <Link to="/" className="active">HOME</Link>
          <span className="nav__link-bar nav__link-bar--green"></span>
        </li>
        <li className="nav__link">
          <Link to="/starships" onClick={(e) => handleActiveClass(e)}>STARSHIPS</Link>
          <span className="nav__link-bar nav__link-bar--blue"></span>
        </li>
      </ul>
    </nav>
  )
}
