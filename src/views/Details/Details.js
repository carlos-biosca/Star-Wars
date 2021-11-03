import { useState } from 'react'

import defaultImage from '../../assets/images/default.jpg'

export default function Details ({ info, id }) {
  const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew } = info

  const [imgSrc, setImgSrc] = useState(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)
  const onError = () => setImgSrc(defaultImage)

  return (
    <div>
      <img src={imgSrc ? imgSrc : defaultImage} onError={onError} alt="" />
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
