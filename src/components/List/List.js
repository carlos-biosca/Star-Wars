import { Link } from 'react-router-dom'

import './List.css'

import filterStarships from '../../logic/filter-starships'


export default function List ({ starships, changeStarship, changeId }) {
  const handleSelectStarship = (e) => {
    const filteredItem = filterStarships(e, starships)
    changeStarship(filteredItem[0])
    changeId((filteredItem[0].url).match(/[0-9]+/))
  }
  return (
    <ul aria-label="starships list" className="list">
      {
        starships && (
          starships.map((starship, index) => {
            return <li key={index} className="list__item" data-testid={`element-${index}`}>
              <Link onClick={(e) => handleSelectStarship(e)} to={`/starships/${starship.name}`}>
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
