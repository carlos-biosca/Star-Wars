import { Link } from 'react-router-dom'

import './List.css'

import useSelectStarship from '../../hooks/useSelectStarship';


export default function List ({ starships, changeStarship, changeId }) {
  const Select = (e) => {
    const { filterStarship, id } = useSelectStarship(e, starships)
    changeStarship(filterStarship)
    changeId(id)
  }
  return (
    <ul aria-label="starships list" className="list">
      {
        starships && (
          starships.map((starship, index) => {
            return <li key={index} className="list__item" data-testid={`element-${index}`}>
              <Link onClick={(e) => Select(e)} to={`/starships/${starship.name}`}>
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
