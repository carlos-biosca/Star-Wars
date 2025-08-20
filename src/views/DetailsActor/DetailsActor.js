import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router'

import './DetailsActor.css'

import { starshipsList, filmsList } from '../../data'

import getData from '../../utils/getData'
import retrieveList from '../../logic/retrieve-list'
import DetailsList from '../../components/DetailsList/DetailsList'
import LoadingSpinner from '../../components/Spinner/Spinner'

import axios from 'axios'

export default function DetailsActors () {
  const { id } = useParams()
  const [actor, setActor] = useState(null)
  const [starships, setStarships] = useState(null)
  const [films, setFilms] = useState(null)
  const [dataIsLoading, setDataIsLoading] = useState(true)


  const sourceRef = useRef(axios.CancelToken.source())

  useEffect(() => {
    const source = sourceRef.current
    const getActor = async () => {
      const dataActor = await getData(`/api/people/${id}/`)
      setActor(dataActor)
      const dataStarships = await retrieveList(dataActor.starships)
      setStarships(dataStarships)
      const dataFilms = await retrieveList(dataActor.films)
      setFilms(dataFilms)
      setDataIsLoading(false)
    }
    getActor()

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setActor(null)
      setStarships(null)
      setFilms(null)
    }
  }, [id])

  return (
    <>
      <div className="details">
        {
          actor && (
            <div className="actor">
              <h3>{actor.name}</h3>
              <div className="actor__details">
                <div>
                  <p className="actor__detail"><span>Height:</span> {actor.height}</p>
                  <p className="actor__detail"><span>Mass:</span> {actor.mass}</p>
                  <p className="actor__detail"><span>Hair color:</span> {actor.hair_color}</p>
                </div>
                <div>
                  <p className="actor__detail"><span>Eye color:</span> {actor.skin_color}</p>
                  <p className="actor__detail"><span>Birth year:</span> {actor.birth_year}</p>
                  <p className="actor__detail"><span>Gender:</span> {actor.gender}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>

      <div className="section">
        {
          starships && starships.length > 0 && (
            <>
              <h3 className="section__header">STARSHIPS</h3>
              <DetailsList list={starships} names={starshipsList} id={'starships'} />
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
