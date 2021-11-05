import { Link } from 'react-router-dom'

import './List.css'

import useFilterArray from '../../hooks/useFilterArray';


export default function List ({ starships, changeStarship, changeId }) {
  const Select = (e) => {
    const { filteredItem } = useFilterArray(e, starships)
    changeStarship(filteredItem)
    changeId((filteredItem[0].url).match(/[0-9]+/)[0])
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
