import { useState, useEffect, useRef } from 'react';

import './Starships.css'

import List from "../../components/List/List"
import Button from '../../components/Button/Button';
import LoadingSpinner from '../../components/Spinner/Spinner';

import retrieveStarships from '../../logic/retrieve-starships';

import axios from 'axios'

export default function Starships () {
  const [starshipList, setStarshipsList] = useState(null)
  const sourceRef = useRef(axios.CancelToken.source())

  useEffect(() => {
    const source = sourceRef.current
    const getStarships = async () => {
      const res = await retrieveStarships()
      setStarshipsList(res)
    }
    getStarships()

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setStarshipsList([])
    }
  }, [])

  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {
        starshipList ? (
          <>
            <List list={starshipList} page={'starships'} />
            <Button open={handleScrollTop} text={'BACK TO TOP'} name={'view__button'} />
          </>
        ) : (
          <LoadingSpinner />
        )
      }
    </>
  )
}