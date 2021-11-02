export default function Details ({ info, id }) {
  const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew } = info
  return (
    <div>
      <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="" />
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <p>Manufacturer: {manufacturer}</p>
      <p>Cost in credits: {cost_in_credits}</p>
      <p>Length: {length}</p>
      <p>Atmospheric Speed: {max_atmosphering_speed}</p>
      <p>Crew: {crew}</p>
    </div>
  )
}
