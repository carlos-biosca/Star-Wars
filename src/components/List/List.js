import { Link } from 'react-router-dom'

import './List.css'

export default function List ({ list, page }) {
  return (
    <ul className="list" aria-label="starships list">
      {
        list && page === 'starships' && (
          list.map((starship, index) => {
            return (
              <Link key={index} to={`/starships/${(starship.url).match(/[0-9]+/)}`}>
                <li className="list__item" data-testid={`element-${index}`}>
                  <h3>{starship.name}</h3>
                  <p>{starship.model}</p>
                </li>
              </Link>
            )
          })
        )
      }
      {
        list && page === 'actors' && (
          list.map((actor, index) => {
            return (
              <Link to={`/actors/${(actor.url).match(/[0-9]+/)}`}>
                <li key={index} className="list__item list__item--actor">
                  <h3>{actor.name}</h3>
                </li>
              </Link>
            )
          })
        )
      }
    </ul>
  )
}
