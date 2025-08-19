import { useState, useEffect, useRef } from 'react';

import './Actors.css'

import List from "../../components/List/List"
import Button from '../../components/Button/Button';
import LoadingSpinner from '../../components/Spinner/Spinner'

import retrieveActors from '../../logic/retrieve-actors'

import axios from 'axios'

export default function Actors () {
  const [actorsList, setActorsList] = useState(null)

  const sourceRef = useRef(axios.CancelToken.source())

  useEffect(() => {
    const source = sourceRef.current
    const getActors = async () => {
      const res = await retrieveActors()
      setActorsList(res)
    }
    getActors()

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setActorsList([])
    }
  }, [])


  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {
        actorsList ? (
          <>
            <List list={actorsList} page={'actors'} />
            <Button open={handleScrollTop} text={'BACK TO TOP'} name={'view__button'} />
          </>
        ) : (
          <LoadingSpinner />
        )
      }
    </>
  )
}
