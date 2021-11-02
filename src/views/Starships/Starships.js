import { useState, useEffect } from 'react';

import List from "../../components/List/List"

import getData from '../../logic/getData';


export default function Starships () {
  const [data, setData] = useState([])
  const [starship, setStarship] = useState('')

  useEffect(() => {
    getData('https://swapi.dev/api/starships/', setData)
  }, [])

  const handleName = (e) => {
    console.log(e.target.classList);
  }

  return (
    <div>
      <List starships={data.results} showInfo={handleName} />
    </div>
  )
}