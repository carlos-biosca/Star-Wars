import { Link } from 'react-router-dom'

import './List.css'

export default function List ({ starships }) {
  return (
    <ul aria-label="starships list" className="list">
      {
        starships && (
          starships.map((starship, index) => {
            return <li key={index} className="list__item" data-testid={`element-${index}`}>
              <Link to={`/starships/${(starship.url).match(/[0-9]+/)}`}>
                <h3>{starship.name}</h3>
                <p>{starship.model}</p>
              </Link>
            </li>
          })
        )
      }
    </ul>
  )
}
