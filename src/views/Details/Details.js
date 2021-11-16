import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import './Details.css'
import { pilotsList, filmsList } from '../../data'
import defaultImage from '../../assets/images/default.jpg'

import getData from '../../utils/getData'
import retrieveList from '../../logic/retrieve-list'
import DetailsList from '../../components/DetailsList/DetailsList'


export default function Details () {
  const { id } = useParams()
  const [starship, setStarship] = useState(null)
  const [pilots, setPilots] = useState(null)
  const [films, setFilms] = useState(null)
  const [imgSrc, setImgSrc] = useState(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)

  useEffect(() => {
    const getStarship = async () => {

      const dataStarship = await getData(`https://swapi.dev/api/starships/${id}/`)
      const dataPilots = await retrieveList(dataStarship.pilots)
      const dataFilms = await retrieveList(dataStarship.films)

      setStarship(dataStarship)
      setPilots(dataPilots)
      setFilms(dataFilms)
    }
    getStarship()
  }, [id])

  return (
    <>
      <div className="details">
        {
          starship && (
            <>
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
            </>
          )
        }
      </div>

      <div className="section">
        <h3 className="section__header">PILOTS</h3>
        {
          pilots && pilots.length > 0 ? (
            <DetailsList list={pilots} names={pilotsList} id={'section'} />
          ) : (
            <p>NIL</p>
          )
        }
      </div>

      <div className="section">
        <h3 className="section__header">FILMS</h3>
        {
          films && films.length > 0 ? (
            <DetailsList list={films} names={filmsList} id={'section'} />
          ) : (
            <p>NIL</p>
          )
        }
      </div>
    </>
  )
}
