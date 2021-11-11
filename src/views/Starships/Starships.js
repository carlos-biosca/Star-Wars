import { useState, useEffect } from 'react';

import './Starships.css'

import List from "../../components/List/List"
import Button from '../../components/Button/Button';

import retrieveStarships from '../../logic/retrieve-starships';
import getData from '../../utils/getData';




export default function Starships () {
  const [starshipList, setStarshipsList] = useState()
  const [page, setPage] = useState()

  useEffect(() => {
    const getStarships = async () => {
      const res = await retrieveStarships()
      setStarshipsList(res.results)
      setPage(res.next)
    }
    getStarships()
  }, [])

  const handleAddNaus = async () => {
    if (page) {
      const res = await getData(page)
      setStarshipsList([...starshipList, ...res.results])
      setPage(res.next)
    }
  }

  return (
    <>
      {
        starshipList && (
          <>
            <List starships={starshipList} />
            <Button open={handleAddNaus} text={'View More'} name={'view__button'} />
          </>
        )
      }
    </>
  )
}