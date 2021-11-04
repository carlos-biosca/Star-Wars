import { useState, useEffect } from 'react';

import List from "../../components/List/List"
import Button from '../../components/Button/Button';

import axios from 'axios'
import retrieveStarships from '../../logic/retrieve-starships'

import { initialUrl } from '../../constants';


export default function Starships ({ changeStarship, changeId }) {
  const [naus, setNaus] = useState()
  const [page, setPage] = useState()

  useEffect(() => {
    const source = axios.CancelToken.source()

    const getData = async () => {
      const res = await retrieveStarships(initialUrl)
      setNaus(res.results)
      setPage(res.next)
    }
    getData()

    return () => {
      source.cancel()
    }
  }, [])

  const handleAddNaus = async () => {
    if (page) {
      const res = await retrieveStarships(page)
      setNaus([...naus, ...res.results])
      setPage(res.next)
    }
  }

  return (
    <>
      <List starships={naus} changeStarship={changeStarship} changeId={changeId} />
      <Button open={handleAddNaus} text={'View More'} />
    </>
  )
}