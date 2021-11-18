import { useState, useEffect, useRef } from 'react';

import './Actors.css'

import List from "../../components/List/List"
import Button from '../../components/Button/Button';

import retrieveActors from '../../logic/retrieve-actors'
import getData from '../../utils/getData';

import axios from 'axios'

export default function Actors () {
  const [actorsList, setActorsList] = useState([])
  const [page, setPage] = useState()

  const sourceRef = useRef(axios.CancelToken.source())

  useEffect(() => {
    const source = sourceRef.current
    const getActors = async () => {
      const res = await retrieveActors()
      setActorsList(res.results)
      setPage(res.next)
    }
    getActors()

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setActorsList([])
      setPage()
    }
  }, [])

  const handleAddActors = async () => {
    if (page) {
      const res = await getData(page)
      setActorsList([...actorsList, ...res.results])
      setPage(res.next)
    }
  }

  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {
        actorsList && (
          <>
            <List list={actorsList} page={'actors'} />
            {
              actorsList.length < 82 ? (
                <Button open={handleAddActors} text={'VIEW MORE'} name={'view__button'} />
              ) : (
                <Button open={handleScrollTop} text={'BACK TO TOP'} name={'view__button'} />
              )
            }
          </>
        )
      }
    </>
  )
}
