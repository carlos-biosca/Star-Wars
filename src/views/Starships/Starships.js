import { useState, useEffect } from 'react';

import List from "../../components/List/List"

import getData from '../../logic/getData';


export default function Starships ({ changeStarship, changeId }) {
  const [data, setData] = useState([])

  useEffect(() => {
    getData('https://swapi.dev/api/starships/', setData)
  }, [])

  return (
    <List starships={data.results} changeStarship={changeStarship} changeId={changeId} />
  )
}