import { useState, useEffect } from 'react';

import List from "../../components/List/List"
import Button from '../../components/Button/Button';

import axios from 'axios'
import retrieveStarships from '../../logic/retrieve-starships'

import { initialUrl } from '../../constants';


export default function Starships ({ changeStarship, changeId }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const source = axios.CancelToken.source()
    const getData = async () => setData(await retrieveStarships(initialUrl))
    getData()

    return () => {
      source.cancel()
    }
  }, [])

  const handleNextPage = async () => {
    if (data.next) setData(await retrieveStarships(data.next))
  }

  const handlePreviousPage = async () => {
    if (data.previous) setData(await retrieveStarships(data.previous))
  }

  return (
    <>
      <List starships={data.results} changeStarship={changeStarship} changeId={changeId} />
      <Button open={handlePreviousPage} text={'previous page'} />
      <Button open={handleNextPage} text={'next page'} />
    </>
  )
}