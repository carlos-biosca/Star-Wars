import { useState, useEffect } from 'react'

import './Details.css'
import defaultImage from '../../assets/images/default.jpg'

import Footer from '../../components/Footer/Footer'

export default function Details ({ info, id }) {
  const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew } = info
  const [imgSrc, setImgSrc] = useState(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className="details">
        <div className="details__image">
          <img src={imgSrc ? imgSrc : defaultImage} onError={() => setImgSrc(defaultImage)} alt="" />
        </div>
        <div className="details__bar"></div>
        <div className="details__info">
          <h3 >{name}</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ipsam corrupti itaque! Quidem similique inventore eius nam esse earum voluptate velit molestias officia, fugit possimus omnis recusandae eaque et laborum ducimus beatae officiis pariatur aliquid. Itaque, cupiditate. Voluptas, adipisci ipsam.</p>
          <div className="details__starship">
            <div>
              <p>Model: {model}</p>
              <p>Manufacturer: {manufacturer}</p>
              <p>Cost in credits: {cost_in_credits}</p>
            </div>
            <div>
              <p>Length: {length}</p>
              <p>Atmospheric Speed: {max_atmosphering_speed}</p>
              <p>Crew: {crew}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}
