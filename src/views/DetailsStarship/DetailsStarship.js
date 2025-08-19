import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router'

import './DetailsStarship.css'

import { pilotsList, filmsList } from '../../data'
import defaultImage from '../../assets/images/default.jpg'

import getData from '../../utils/getData'
import retrieveList from '../../logic/retrieve-list'
import DetailsList from '../../components/DetailsList/DetailsList'

import axios from 'axios'
import LoadingSpinner from '../../components/Spinner/Spinner'

export default function Details () {
  const { id } = useParams()
  const [starship, setStarship] = useState(null)
  const [pilots, setPilots] = useState(null)
  const [films, setFilms] = useState(null)
  const [dataIsLoading, setDataIsLoading] = useState(true)
  const [imgSrc, setImgSrc] = useState(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)

  const sourceRef = useRef(axios.CancelToken.source())

  useEffect(() => {
    const source = sourceRef.current
    const getStarship = async () => {
      const dataStarship = await getData(`/api/starships/${id}/`)
      setStarship(dataStarship)
      const dataPilots = await retrieveList(dataStarship.pilots)
      setPilots(dataPilots)
      const dataFilms = await retrieveList(dataStarship.films)
      setFilms(dataFilms)
      setDataIsLoading(false)
    }
    getStarship()

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setStarship(null)
      setPilots(null)
      setFilms(null)
    }
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
                <h3>{starship.name}</h3>
                <div className="details__starship">
                  <div className='details__section'>
                    <p className='details__data'><span>Model:</span> {starship.model}</p>
                    <p className='details__data'><span>Manufacturer:</span> {starship.manufacturer}</p>
                    <p className='details__data'><span>Cost:</span> {starship.cost_in_credits} credits</p>
                  </div>
                  <div>
                    <p className='details__data'><span>Length:</span> {starship.length}</p>
                    <p className='details__data'><span>Atmospheric Speed:</span> {starship.max_atmosphering_speed}</p>
                    <p className='details__data'><span>Crew:</span> {starship.crew}</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>

      <div className="section">
        {
          pilots && pilots.length > 0 && (
            <>
              <h3 className="section__header">PILOTS</h3>
              <DetailsList list={pilots} names={pilotsList} id={'actors'} />
            </>
          )
        }
      </div>

      <div className="section">
        {
          films && films.length > 0 && (
            <>
              <h3 className="section__header">FILMS</h3>
              <DetailsList list={films} names={filmsList} />
            </>
          )
        }
      </div>

      <div className="section">
        {
          dataIsLoading && (
            <LoadingSpinner />
          )
        }
      </div>
    </>
  )
}
