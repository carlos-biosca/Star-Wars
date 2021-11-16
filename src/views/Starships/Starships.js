import { useState, useEffect } from 'react';

import './Starships.css'

import List from "../../components/List/List"
import Button from '../../components/Button/Button';

import retrieveStarships from '../../logic/retrieve-starships';
import getData from '../../utils/getData';

export default function Starships () {
  const [starshipList, setStarshipsList] = useState([])
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

  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {
        starshipList && (
          <>
            <List starships={starshipList} />
            {
              starshipList.length < 36 ? (
                <Button open={handleAddNaus} text={'VIEW MORE'} name={'view__button'} />
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