import './List.css'

export default function List ({ starships, showInfo }) {
  return (
    <ul aria-label="starships list" className="list" onClick={showInfo}>
      {
        starships && (
          starships.map((starship, index) => {
            return <li key={index} className="list__item" data-testid={`element-${index}`}>
              <h3>{starship.name}</h3>
              <p>{starship.model}</p>
            </li>
          })
        )
      }
    </ul>
  )
}
