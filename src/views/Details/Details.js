import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import './Details.css'
import defaultImage from '../../assets/images/default.jpg'

import getData from '../../utils/getData'


export default function Details () {
  const { id } = useParams()
  const [starship, setStarship] = useState(null)
  const [imgSrc, setImgSrc] = useState(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const getStarship = async () => setStarship(await getData(`https://swapi.dev/api/starships/${id}/`))
    getStarship()
  }, [id])

  return (
    <>
      {
        starship && (
          <div className="details">
            <div className="details__image">
              <img src={imgSrc ? imgSrc : defaultImage} onError={() => setImgSrc(defaultImage)} alt="" />
            </div>
            <div className="details__bar"></div>
            <div className="details__info">
              <h3 >{starship.name}</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ipsam corrupti itaque! Quidem similique inventore eius nam esse earum voluptate velit molestias officia, fugit possimus omnis recusandae eaque et laborum ducimus beatae officiis pariatur aliquid. Itaque, cupiditate. Voluptas, adipisci ipsam.</p>
              <div className="details__starship">
                <div>
                  <p>Model: {starship.model}</p>
                  <p>Manufacturer: {starship.manufacturer}</p>
                  <p>Cost in credits: {starship.cost_in_credits}</p>
                </div>
                <div>
                  <p>Length: {starship.length}</p>
                  <p>Atmospheric Speed: {starship.max_atmosphering_speed}</p>
                  <p>Crew: {starship.crew}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
