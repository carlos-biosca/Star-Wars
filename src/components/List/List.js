import './List.css'

export default function List ({ starships }) {
  return (
    <ul aria-label="starships list" className="list">
      {
        !starships ? (<h3>No List</h3>) :
          (
            starships.map((starship, index) => {
              return <li key={index} className="list__item">
                <h3>{starship.name}</h3>
                <p>{starship.model}</p>
              </li>
            })
          )
      }
    </ul>
  )
}
