import { useState, useEffect } from 'react';

import List from "../../components/List/List"

import axios from 'axios'
import retrieveStarships from '../../logic/retrieve-starships'


export default function Starships ({ changeStarship, changeId }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const source = axios.CancelToken.source()
    const getData = async () => setData(await retrieveStarships())
    getData()

    return () => {
      source.cancel()
    }
  }, [])

  return (
    <List starships={data.results} changeStarship={changeStarship} changeId={changeId} />
  )
}