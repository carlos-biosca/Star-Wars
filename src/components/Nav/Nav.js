import { Link } from "react-router-dom"
import './Nav.css'

export default function Nav () {


  return (
    <nav>
      <ul aria-label="menu">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/starships">STARSHIPS</Link>
        </li>
      </ul>
    </nav>
  )
}
