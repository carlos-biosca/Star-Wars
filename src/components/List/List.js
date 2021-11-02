import { Link } from 'react-router-dom'

import './List.css'

import handleShipSelection from '../../logic/handleShipSelection';


export default function List ({ starships, changeStarship, changeId }) {
  return (
    <ul aria-label="starships list" className="list">
      {
        starships && (
          starships.map((starship, index) => {
            return <li key={index} className="list__item" data-testid={`element-${index}`}>
              <Link onClick={(e) => handleShipSelection(e, starships, changeStarship, changeId)} to={`/starships/${starship.name}`}>
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
